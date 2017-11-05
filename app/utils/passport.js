import passport from 'passport';
import config from '../config';

import * as userService from '../services/userService';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const {id: googleId, name: {familyName, givenName}, emails} = profile;

        const data = await userService.getUserByGoogleId(googleId);
        const user = await data.rows[0];

        if (user) {
            return done(null, user);
        }

        const newUser = {
            "google_id": googleId,
            "google_email": emails[0].value,
            "name": givenName,
            "last_name": familyName,
        };

        const existingData = await userService.saveUser(newUser);
        const existingUser = await existingData.rows[0];

        return done(null, existingUser);
    } catch (error) {
        return done(error, null)
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});