import express from 'express';
import passport from 'passport';
import validate from 'express-validation';

import '../utils/passport';

import loginValidator from '../validators/loginValidator';

import * as userController from '../controllers/userControlller';

const router = express.Router();
const passportGoogle = passport.authenticate('google', {  scope: ['email profile'] });

router.post('/signin',  validate(loginValidator), userController.authenticate);

router.get('/auth/google', passportGoogle);

router.get('/auth/google/callback',
    passport.authenticate('google'),
    userController.authenticateByGoogle
);

export default router;
