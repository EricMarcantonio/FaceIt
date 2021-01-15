import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import mongoose from 'mongoose';
import express from 'express';
const cors = require('cors');
import { faceapi } from './env';

const corsHandler = cors({ origin: true });
import '@tensorflow/tfjs-node';

admin.initializeApp(functions.config().firebase);
//Routers
import { statsRouter, photoRouter } from './routes';

const app = express(); //global express app

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.use('/photo', photoRouter);
app.use('/stats', statsRouter);

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
    });

exports.api = functions
    .region('northamerica-northeast1')
    .https.onRequest((req, res) => {
        (async function () {
            const MODEL_URL = 'src/assets/weights';
            await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
            await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL);
            await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_URL);
        })().then(() => {
            corsHandler(req, res, () => {
                app(req, res);
            });
        });
    });
// exports.api = functions.https.onRequest((req, res) => {
//     corsHandler(req, res, () => {
//         app(req, res);
//     });
// });


/*
(async function () {
            const MODEL_URL = 'src/assets/weights';
            await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
            await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL);
            await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_URL);
        })()
*/
// exports.api = functions.https.onRequest(app)
