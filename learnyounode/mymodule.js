const fs = require('fs');
const path = require('path');


module.exports = function (directory, fileExtension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        
        const filteredFiles = list.filter(file => {
            return path.extname(file) === '.' + fileExtension;
        });

        callback(null, filteredFiles);
    });
}