const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const app = express();

require('./config/db-connection');

const homeRouter = require('./routes/home');
const surveyRouter = require('./routes/survey');
const suggestionsRouter = require('./routes/suggestions');
const donationsRotuer = require('./routes/donation');

app.use(logger('dev'))
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
// CORS configuration
const allowedOrigins = ['http://localhost:3000', 'https://enterprise.amanbs.com'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(cookieParser());

app.use('/', homeRouter);
app.use('/survey', surveyRouter);
app.use('/suggestions', suggestionsRouter);
app.use('/donations', donationsRotuer);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = res.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;