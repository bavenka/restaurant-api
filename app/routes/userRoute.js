import express from 'express';
import validate from 'express-validation';

import userValidator from '../validators/userValidator';

import * as userController from '../controllers/userControlller';

const router = express.Router();

router.post('/signup', validate(userValidator), userController.registerUser);

export default router;
