'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);

app.listen(
    process.env.PORT || 8080,
    process.env.HOST || '0.0.0.0',
    () => console.log('sweet-bot is running...')
);
