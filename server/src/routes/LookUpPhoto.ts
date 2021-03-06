import { extractPhoto, compareDescriptors } from '../util';
import { Request, Response } from 'express';
import { canvas, faceapi } from '../env';

export const LookUpPhoto = async (req: Request, res: Response) => {
    const tempImage = await canvas.loadImage(extractPhoto(req));
    const details = await faceapi
        .detectSingleFace(tempImage)
        .withFaceLandmarks()
        .withFaceDescriptor();

    compareDescriptors(details).then((person: any) => {
        if (person !== '') {
            res.json({
                user: person,
            });
        } else {
            res.json({
                user: 'Not found',
            });
        }
    });
};
