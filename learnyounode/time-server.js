'use strict'
const net = require('net');

function formatTime() {
    var d = new Date();
    var year = d.getFullYear();
    // getMonth returns the month from 0 to 11
    var month = zeroFilled(d.getMonth() + 1);
    var day = zeroFilled(d.getDate());
    var hour = zeroFilled(d.getHours());
    var minute = zeroFilled(d.getMinutes());
    return year + "-" + month + "-" + day + " " + hour + ":" + minute;
}

function zeroFilled(i) {
    return (i < 10 ? "0" : "") + i;
}

const server = net.createServer(function listener(socket) {
    socket.end(formatTime() + '\n');
})

server.listen(process.argv[2]);

// previous try
/*
function zeroFilled(number) {
    return number.toString().length == 1 
        ? "0" + number
        : number;
}

const server = net.createServer(function listener(socket) {
    // console.log('connetected to server!');
    var date = new Date();
    var data = formatTime(date) 
    socket.end(data + '\n');
    // socket.write(data + '\n', () => {
    //     socket.end();
    // })
});
*/