import mongoose from 'mongoose';
import express from 'express';
const cors = require('cors');
import { faceapi } from './env';

import '@tensorflow/tfjs-node';

//Routers
import { statsRouter, photoRouter } from './routes';

const app = express(); //global express app

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.use('/photo', cors({origin: true}), photoRouter);
app.use('/stats', cors({origin: true}), statsRouter);

app.use(cors());

mongoose
    .connect(
        'mongodb+srv://admin:z2eSwDgu9oDQKVJy@cluster0.zbto2.mongodb.net/photos?retryWrites=true&w=majority',
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        }
    )
    .catch(er => {
        console.log(er);
    })
    .then(() => {
        console.log('Mongoose Connected');
    });

(async function () {
    const MODEL_URL = 'src/assets/weights';
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_URL);
})().then(() => {
    app.listen(3000, () => {
        console.log('Listening on 3000');
    });
});
