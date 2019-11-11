const fs = require('fs');
fs.readFile(process.argv[2], function finishedReading(err, content) {
    if (err) return console.error(err);
    let str = content.toString();
    let array = str.split('\n');
    console.log(array.length - 1);
})