import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as faceapi from 'face-api.js';

import { upload } from './file';

//Routes
import { AddUser, UserLookUp } from './routes/AddUserFromFileUpload';
import { GetAllImages } from './routes/GetAllImages';

const app = express(); //global express app

//although insecure, this is all local, so cors doesn't matter as much
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.post('/photo', upload.single('image'), AddUser);
app.post('/photoLookup', upload.single('image'), UserLookUp)
app.get('/photo', GetAllImages);

let db: mongoose.Collection;

(async function () {
    const MODEL_URL = 'src/assets/weights';
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_URL);
})();

mongoose
    .connect('mongodb://localhost:27017/photos', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true,
    })
    .then(() => {
        db = mongoose.connection.collection('users');
        app.listen(8080, () => {
            console.log('Accepting requests on port 8080');
        });
    });

export { db };
