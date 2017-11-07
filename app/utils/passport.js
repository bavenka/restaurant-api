import passport from 'passport';
import {google, facebook, vkontakte} from '../config';

import * as userService from '../services/userService';

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(new GoogleStrategy({
    clientID: google.clientId,
    clientSecret: google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, userService.authenticateByGoogle));

passport.use(new FacebookStrategy({
    clientID: facebook.clientId,
    clientSecret: facebook.clientSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
}, userService.authenticateByFacebook));

passport.use(new VKontakteStrategy({
    clientID: vkontakte.clientId,
    clientSecret: vkontakte.clientSecret,
    callbackURL: "http://localhost:3000/auth/vkontakte/callback",
}, userService.authenticateByVkontakte));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
