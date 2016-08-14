'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);

app.listen(8080, '127.0.0.1', () => console.log('sweet-bot is running...'))
