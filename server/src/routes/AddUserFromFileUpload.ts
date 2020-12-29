import { Request, Response } from 'express';

import * as fs from 'fs';
import * as path from 'path';

import { Image, User } from '../model';

export const AddUser = (req: Request, res: Response) => {
    let obj = {
        img: {
            data: fs.readFileSync(
                path.join( __dirname + '/uploads/' + req.file.filename)
                
            ),
            contentType: 'image/jpeg',
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
            console.log(tempId);
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
