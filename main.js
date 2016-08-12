var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'application/json',
    });
    console.log('que pedo');
    res.end('{"text": "khe http://i.imgur.com/LjEuB5q.jpg"}');
}).listen(8080, '127.0.0.1');

console.log('server running...');
