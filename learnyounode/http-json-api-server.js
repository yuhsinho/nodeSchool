'use strict'
const url = require('url');
const http = require('http');

function formatParseTime(d) {
    return {
        'hour': d.getHours(),
        'minute': d.getMinutes(),
        'second': d.getSeconds(),
    }
}

function formatUnixTime(d) {
    return {
        'unixtime': d.getTime(),
    }
}

const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const date = new Date(parsedUrl.query.iso);
    let result 
    if (pathName == '/api/parsetime') {
        result = formatParseTime(date)
    } else if (pathName == '/api/unixtime') {
        result = formatUnixTime(date)
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
})

server.listen(Number(process.argv[2]));

// 1st try
/*
const server = http.createServer(function (req, res) {
    if (req.method !== 'GET') {
        return res.end('This is not a GET request.\n');
    }
    res.writeHead(200, { 'Content-Type': 'application/json' }) 

    var parsedUrl = url.parse(req.url, true);
    var pathName = parsedUrl.pathname;
    var iso = parsedUrl.query.iso;
    var date = new Date(iso);
    
    if (pathName == '/api/parsetime') {
        res.end(JSON.stringify(formatParseTime(date)))
    } else if (pathName == '/api/unixtime') {
        res.end(JSON.stringify(formatUnixTime(date)))
    }
})
*/

// 2nd try
/*
const server = http.createServer(function (req, res) {
    if (req.method !== 'GET') {
        return res.end('This is not a GET request.\n');
    }

    const parsedUrl = new URL(req.url, 'http://example.com');
    const pathName = parsedUrl.pathname;
    const time = new Date(parsedUrl.searchParams.get('iso'));
    let result
   
    // if (/^\/api\/parsetime/.test(req.url))
    if (pathName == '/api/parsetime') {
        result = formatParseTime(time)
    } else if (pathName == '/api\/unixtime') {
        result = formatUnixTime(time);
    }

    if(result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
})
*/