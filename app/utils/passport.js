import passport from 'passport';
import config from '../config';

import * as userService from '../services/userService';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
        clientID: config.google.clientId,
        clientSecret: config.google.clientSecret,
        callbackURL: "http://localhost:3000/auth/google/callback"
    }, async (accessToken, refreshToken, profile, done) => {

    const data = await userService.getUserByGoogleId(profile.id);
    const existingUser = await data.rows[0];
    console.log(existingUser);
    }));