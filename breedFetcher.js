const request = require('request');

const requestCatInfo = function(input) {
  if (input.length !== 3) {
    console.log('Three arguments needed');
  }
  const search = input[2].slice().toLowerCase();

  request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (err, response, body) => {
    if (err) {
      console.log('An error occured', err);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`${search} not found`);
    } else {
      console.log(data[0].description);
    }
  });
};

const input = process.argv;
requestCatInfo(input);