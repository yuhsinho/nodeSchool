'use strict'
const map = require('through2-map')  
const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('This is not a POST request.\n')
    }

    req.pipe(map(function (data) {
        return data.toString().toUpperCase()
    })).pipe(res)
});

server.listen(process.argv[2])
// server.listen(Number(process.argv[2]));