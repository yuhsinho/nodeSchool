const fs = require('fs');
const path = require('path');
const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, function callback(err, list) {
    if (err) return console.error(err);
    list.forEach(file => {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    })
})

// First try
/*
fs.readdir(process.argv[2], function callback(err, list) {
    if (err) return console.err(err);

    for (fileName of list) {
        let fileType = fileName.split('.')[1];
        if (fileType != undefined && fileType == process.argv[3]) {
            console.log(fileName);
        }
    }
})
*/