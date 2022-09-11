const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const PATH = process.argv[3];

request(`${URL}`, (error, response, body) => {
  fs.writeFile(`${PATH}`, body, err => {
    if (err) {
      console.error(err);
    }
  });
});

const stats = fs.statSync(`${PATH}`);
const fileSize = stats.size;

console.log(`Downloaded and saved ${fileSize} bytes to ${PATH})`);
 
