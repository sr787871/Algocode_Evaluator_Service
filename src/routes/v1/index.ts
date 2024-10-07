import express from 'express';

import { PingController } from '../../controllers/pingController';
import submissionRouter from './submissionRoutes';

const v1Router = express.Router();

v1Router.use('/submissions',submissionRouter);


v1Router.get('/ping', PingController);

export default v1Router;