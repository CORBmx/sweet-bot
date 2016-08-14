'use strict';

const express = require('express');

const app = express();

app.post('/', (req, res) => {
    console.log(`text: ${req.body.text}`);
    const dulcefiedText = req.body.text.replace('dulce ', '').toLowerCase().replace(/[aeiouaáéíóú]/g, 'i')

    res.json( {
        username: 'Li Dilci',
        text:  `${dulcefiedText} http://i.imgur.com/LjEuB5q.jpg`,
    });
});

module.exports = app;
