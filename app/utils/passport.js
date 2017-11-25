import passport from 'passport';
import {google} from '../config';

import * as userService from '../services/userService';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: google.clientId,
    clientSecret: google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, userService.authenticateByGoogle));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
