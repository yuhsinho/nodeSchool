'use strict'
const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    // writeHead 
    res.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(process.argv[3]).pipe(res);
})

server.listen(process.argv[2]);