const request = require('request');

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
}

module.exports = {
  getWeather
}
