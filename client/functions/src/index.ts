import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import mongoose from 'mongoose';
import express from 'express';
const cors = require('cors');


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
        corsHandler(req, res, () => {
            app(req, res);
        });
    });
// exports.api = functions.https.onRequest((req, res) => {
//     corsHandler(req, res, () => {
//         app(req, res);
//     });
// });

// exports.api = functions.https.onRequest(app)
