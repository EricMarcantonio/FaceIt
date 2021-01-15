import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
    img: {
        data: Buffer,
        contentType: String,
        features: JSON,
    },
});

export const Image = model('Image', imageSchema);

