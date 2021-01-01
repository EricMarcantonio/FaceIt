import { Request, Response } from 'express';
import { canvas } from '../env';
import * as faceapi from 'face-api.js';
import { Image, User } from '../model';
import { extractPhoto } from '../util';


export const AddPhoto = async (req: Request, res: Response) => {
    const start = new Date().getTime()
    let tempImage = await canvas.loadImage(extractPhoto(req));

    let tempImageDesc = await faceapi
        .detectSingleFace(tempImage)
        .withFaceLandmarks()
        .withFaceDescriptor();

    if (!tempImageDesc) {
        res.status(404).json({ status: 'No Face Found' });
    } else {
        const label = new faceapi.LabeledFaceDescriptors(req.body.name, [
            tempImageDesc.descriptor,
        ]);

        //catch for not being able to find a face

        let obj = {
            img: {
                data: extractPhoto(req),
                contentType: 'image/jpeg',
                features: label.toJSON(),
            },
        };

        let tempId: string;
        // @ts-ignore
        Image.create(obj, (err, item) => {
            if (err) {
                res.status(500).json({
                    status: err,
                });
            } else {
                item.save();
                tempId = item._id;
                const query = { name: req.body.name };
                User.exists(query, (err, doc) => {
                    if (err) {
                        res.status(500).json({
                            status: err,
                        });
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
                            new User({
                                name: req.body.name,
                                relatedPictureIDs: [tempId],
                            }).save();
                        }
                        console.log(new Date().getTime() - start)
                    }
                });
            }
        });
    }
};
