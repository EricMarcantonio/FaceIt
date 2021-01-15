import { Request, Response } from 'express';

import { Image } from '../model';

export const GetAllImages = (req: Request, res: Response) => {
    Image.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        } else {
            res.json(items).end();
            
        }
    });
};
