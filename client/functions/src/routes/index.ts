import { AddPhoto } from './AddPhoto';
import { GetAllImages } from './GetAllImages';
import { LookUpPhoto } from './LookUpPhoto';
import { Router } from 'express';

const photoRouter = Router();


photoRouter.get('/', GetAllImages);
photoRouter.post('/lookup', LookUpPhoto);
photoRouter.post('/add', AddPhoto);

const statsRouter = Router();

statsRouter.get('/');

export { photoRouter, statsRouter };
