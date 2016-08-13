'use strict';

const express = require('express');
const router = require('./app/router');

const app = express();

app.use('/ladulce', router);

app.listen(8080, '127.0.0.1', () => console.log('sweet-bot is running...'))
