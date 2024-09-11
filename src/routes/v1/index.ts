import express from 'express';

import { PingController } from '../../controllers/pingController';

const v1Router = express.Router();

v1Router.get('/ping', PingController);

export default v1Router;