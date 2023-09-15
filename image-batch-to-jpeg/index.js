

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { mkdirp } = require('mkdirp');

const dirInIndex = process.argv.indexOf('-dir_in');
const dirOutIndex = process.argv.indexOf('--dir_out');

const dirInValue = process.argv[dirInIndex + 1];

let dirOutValue = dirOutIndex > 0 ? process.argv[dirOutIndex + 1] : dirInValue;

dirOutValue = path.join(dirOutValue, 'jpeg-images');

fs.mkdirSync(dirOutValue, { recursive: true })


fs.readdir(dirInValue, (err, rawFiles) => {
    rawFiles.forEach( file => {

        if(file.split('.').length > 1)
        {
            sharp(dirInValue + '\\' + file).jpeg({ mozjpeg: true })
            .toBuffer()
            .then(imageBuffer => fs.writeFile(path.join(dirOutValue, file.split('.')[0] + '.jpg') , imageBuffer, () => {}))
        }
    })
})





