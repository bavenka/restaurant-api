import express from 'express';
import passport from 'passport';

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

import users from './routes/userRoute';
import categories from './routes/categoryRoute';
import CustomError from "./errors/custom-error";

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', users);
app.use('/categories', categories);

// error handler
app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        res.status(err.status).json({error: err.message});
    } else if (err.detail && !err.status) {
        res.status(409).json({error: err.detail});
    } else if(!err.detail && err.status) {
        res.status(err.status).json({error: err.message});
    } else {
        res.status(500).json({error: err.message});
    }
});

module.exports = app;
