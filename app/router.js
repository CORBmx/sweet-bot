'use strict';

const express = require('express');

const app = express();

app.post('/', (req, res) => {
    console.log(`text: ${req.body.text}`);
    const dulcefiedText = req.body.text.replace('dulce ', '')
        .toLowerCase()
        .replace(/[aeiouaáéíóú]/g, 'i')
        .replace('qii', 'ki');

    res.json( {
        username: 'Li Dilci',
        icon_url: 'https://chat.corb.mx/api/v3/users/5n8yu6gytjgi7cjegjmejheq4o/image?time=1466011440913',
        text:  `## ${dulcefiedText} \n![${dulcefiedText}](http://i.imgur.com/LjEuB5q.jpg)`,
    });
});

module.exports = app;
