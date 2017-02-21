// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import {auth as authConfig} from '../config';
import setupAuthRoutes from './auth';

// init app
const app = express();

// setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// add cookie parsing
app.use(cookieParser());

// add session support
app.use(session({
  secret: authConfig.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false},
}));

// add password.js
app.use(passport.initialize());
app.use(passport.session());
// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});

setupAuthRoutes(app);


// catch all unhandler errors
app.use((err, req, res) => {
  // console.error(err.stack);
  res.status(500).send(err);
});

// export app
export default app;
