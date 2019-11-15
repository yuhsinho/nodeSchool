const mymodule = require('./mymodule.js');

const folder = process.argv[2];
const ext = process.argv[3];

mymodule(folder, ext, function (err, data) {
    if (err) return console.error(err);

    data.forEach(file => {
        console.log(file);
    })
})