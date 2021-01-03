import { Request } from 'express';
import { Image } from './model';
import * as faceapi from 'face-api.js';

export const compareDescriptors = (details: any) => {
    return LocallyGetImages().then((data) => {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            element.img.features.descriptors;
            let labeledDesc = faceapi.LabeledFaceDescriptors.fromJSON(
                element.img.features
            ); //might have to point to other
            let matcher = new faceapi.FaceMatcher(labeledDesc);
            //test against the image
            if (!details){
                continue
            }
            let bestMatch = matcher.findBestMatch(details.descriptor);
            if (bestMatch.distance < 0.55) {
                return bestMatch.label;
            }
        }
        return '';
    });
};

export const extractPhoto = (req: Request) => {
    return Buffer.from(
        req.body.picture.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
    );
};

export const LocallyGetImages = async () => {
    return Image.find({}, (err, items) => {
        return items;
    });
};
