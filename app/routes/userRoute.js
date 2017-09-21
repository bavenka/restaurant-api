import express from 'express';
import validate from 'express-validation';

import userValidator from '../validators/userValidator';
import loginValidator from '../validators/loginValidator';


import * as userController from '../controllers/userControlller';

const router = express.Router();

router.post('/signup', validate(userValidator), userController.saveUser);
router.post('/login',  validate(loginValidator), userController.login);

export default router;
