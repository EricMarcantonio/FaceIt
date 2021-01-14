import { Request, Response } from 'express';
import { canvas, faceapi } from '../env';
import { Image } from '../model';
import { extractPhoto } from '../util';

export const AddPhoto = async (req: Request, res: Response) => {
    console.log('Processing', req.body.name);
    const start = new Date().getTime();
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
                res.send(200);
            }
        });
    }
    console.log(
        'Finished Processing',
        req.body.name,
        'in',
        (new Date().getTime() - start) / 1000 + 's'
    );
};
