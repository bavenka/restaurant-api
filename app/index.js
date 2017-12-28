import express from 'express';
import passport from 'passport';
import cors from 'cors';

const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');

import users from './routes/userRoute';
import categories from './routes/categoryRoute';
import dishes from './routes/dishRoute';
import auth from './routes/authRoute';
import cart from './routes/cartRoute';
import reservation from './routes/reservationRoute';
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

app.use(cors());
app.options('*', cors());

app.use('/', users, auth);
app.use('/categories', categories);
app.use('/dishes', dishes);
app.use('/users', cart, reservation);

// error handler
app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        res.status(err.status).json({error: err.message});
    } else if (err.detail && !err.status) {
        res.status(409).json({error: err.detail});
    } else if (!err.detail && err.status) {
        res.status(err.status).json({error: err.message});
    } else {
        res.status(500).json({error: err.message});
    }
});

module.exports = app;
