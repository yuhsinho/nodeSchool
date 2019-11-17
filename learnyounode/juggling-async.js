const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

function httpGet(i) {
    http.get(process.argv[2+i], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) return console.error(err);
            results[i] = data.toString();
            count ++;
            if (count === 3) {
                printResults();
            }
        }))
    })
}

function printResults() {
    for (i = 0; i < 3; i ++) {
        console.log(results[i])
    }   
}

for (i = 0; i < 3; i ++) {
    httpGet(i);
}