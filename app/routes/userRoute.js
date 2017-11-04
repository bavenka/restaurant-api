import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import  '../utils/passport';

import userValidator from '../validators/userValidator';
import loginValidator from '../validators/loginValidator';


import * as userController from '../controllers/userControlller';

const router = express.Router();

router.post('/signup', validate(userValidator), userController.saveUser);

router.post('/signin',  validate(loginValidator), userController.authenticate);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/signin' }),
    function(req, res) {
        res.redirect('/');
    });

export default router;
