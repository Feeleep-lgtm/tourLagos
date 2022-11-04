/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const tourRouter = require('./route/tourRoute');

const userRouter = require('./route/userRoute');
const app = express();

// 1) MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//ROUTE

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
