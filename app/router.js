const express = require('express');

const app = express();

app.post('/', (req, res) => {
    const dulcefiedText = req.body.text.replace('dulce ', '').toLowerCase().replace(/[aeiouaáéíóú]/g, 'i')

    res.json( {
        username: 'Li Dilci',
        text:  `${dulcefiedText} http://i.imgur.com/LjEuB5q.jpg`,
    });
});

module.exports = () => {
    app.listen(8080, '127.0.0.1', () => console.log('sweet-bot is running...'))
}
