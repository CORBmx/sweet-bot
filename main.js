var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'application/json',
    });
    console.log(req.body);
    res.end('{"text": "dilci"}');
}).listen(8080, '127.0.0.1');

console.log('server running...');
