var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'application/json',
    });
    if (req.method == 'POST') {
        var jsonString = '';

        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
            console.log(JSON.parse(jsonString));
            res.end('{"text": "dilci dilci"}');
        });
    }

}).listen(8080, '127.0.0.1');

console.log('server running...');
