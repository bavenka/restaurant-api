import express from 'express';
import validate from 'express-validation';
import jwt from 'express-jwt';

import config from '../config';

import categoryValidator from '../validators/categoryValidator';

import * as categoryController from '../controllers/categoryController';

const router = express.Router();

//TODO on authorize
/*router.use(jwt({
    secret: config.jwt.secret,
    getToken: req => req.header('Authorization'),
}));*/

router.post('/create', validate(categoryValidator), categoryController.createCategory);

export default router;