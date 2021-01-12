import * as functions from 'firebase-functions';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import * as faceapi from 'face-api.js';
import '@tensorflow/tfjs-node';
//Routers
import { statsRouter, photoRouter } from './routes';

const app = express(); //global express app

//although insecure, this is all local, so cors doesn't matter as much
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: true }));

app.use('/photo', photoRouter);
app.use('/stats', statsRouter);

(async function () {
    const MODEL_URL = 'src/assets/weights';
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_URL);
})();

mongoose
    .connect(
        'mongodb+srv://admin:z2eSwDgu9oDQKVJy@cluster0.zbto2.mongodb.net/photos?retryWrites=true&w=majority";',
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        }
    )
    .catch(er => {
        console.log(er);
    });
exports.api = functions.https.onRequest(app);
