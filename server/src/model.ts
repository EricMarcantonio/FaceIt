import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
    img: {
        data: Buffer,
        contentType: String,
        features: JSON,
    },
});

const userSchema = new Schema({
    name: String,
    relatedPictureIDs: [String],
});

export const Image = model('Image', imageSchema);
export const User = model('User', userSchema);
