import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import  '../utils/passport';

import userValidator from '../validators/userValidator';
import loginValidator from '../validators/loginValidator';


import * as userController from '../controllers/userControlller';

const router = express.Router();
const passportGoogle = passport.authenticate('google', { session: false, scope: ['email profile'] });

router.post('/signup', validate(userValidator), userController.registerUser);

router.post('/signin',  validate(loginValidator), userController.authenticate);

router.get('/auth/google', passportGoogle);

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/signin' }),
    userController.authenticateByGoogle
  );

export default router;
