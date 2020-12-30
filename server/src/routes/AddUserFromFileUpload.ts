import { Request, Response } from 'express';

import * as fs from 'fs';
import * as path from 'path';
import { canvas } from '../ML/env';
import * as faceapi from 'face-api.js';
import { Image, User } from '../model';

import '@tensorflow/tfjs-node';
import { LocallyGetImages } from './GetAllImages';
import { exit } from 'process';

export const AddUser = async (req: Request, res: Response) => {
    const tempBytes = fs.readFileSync(
        path.join(__dirname + '/uploads/' + req.file.filename)
    );

    let tempImage = await canvas.loadImage(tempBytes);

    let tempImageDesc = await faceapi
        .detectSingleFace(tempImage)
        .withFaceLandmarks()
        .withFaceDescriptor();

    const label = new faceapi.LabeledFaceDescriptors(req.body.name, [
        //@ts-ignore
        tempImageDesc.descriptor,
    ]);

    //catch for not being able to find a face

    let obj = {
        img: {
            data: tempBytes,
            contentType: 'image/jpeg',
            features: label.toJSON(),
        },
    };

    let tempId: string;
    // @ts-ignore
    Image.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        } else {
            item.save();
            res.redirect('http://localhost:8000/');
            tempId = item._id;
            fs.unlinkSync(
                path.join(__dirname + '/uploads/' + req.file.filename)
            );
            const query = { name: req.body.name };
            User.exists(query, (err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    if (doc) {
                        //update the array of picture that are in the file
                        User.findOneAndUpdate(
                            { name: req.body.name },
                            { $push: { relatedPictureIDs: tempId } },
                            //@ts-ignore
                            (err, suc) => {}
                        );
                    } else {
                        let temp = new User({
                            name: req.body.name,
                            relatedPictureIDs: [tempId],
                        });
                        temp.save();
                    }
                }
            });
        }
    });
};

export const UserLookUp = async (req: Request, res: Response) => {
    //middleware makes it available
    const tempBytes = fs.readFileSync(
        path.join(__dirname + '/uploads/' + req.file.filename)
    );
    //
    const tempImage = await canvas.loadImage(tempBytes);
    const details = await faceapi
        .detectSingleFace(tempImage)
        .withFaceLandmarks()
        .withFaceDescriptor();

    fs.unlinkSync(path.join(__dirname + '/uploads/' + req.file.filename));
    //who are you?

    compareDescriptors(details).then((person) => {
        if (person !== '') {
            res.json({
                User: person,
            });
        } else {
            res.json({
                User: 'Not found',
            });
        }
    });
};

const compareDescriptors = (details: any) => {
    return LocallyGetImages().then((data) => {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            element.img.features.descriptors;
            let labeledDesc = faceapi.LabeledFaceDescriptors.fromJSON(
                element.img.features
            ); //might have to point to other
            let matcher = new faceapi.FaceMatcher(labeledDesc);
            //test against the image
            let bestMatch = matcher.findBestMatch(details.descriptor);
            if (bestMatch.distance < 0.55) {
                return bestMatch.label;
            }
        }
        return '';
    });
};
