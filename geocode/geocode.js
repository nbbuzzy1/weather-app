const request = require('request');

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address)

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=kh0VX4AjrfPVGpCXwkEIJD8Lgq80XQly&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Mapquest servers')
    } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
      callback('Unable to find that address')
    } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
}

//module.exports.geocodeAddress = geocodeAddress;

//b1e9e52177c78752178bb4d00ee0c02b

// https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/37.8267,-122.4233

// https://api.darksky.net/forecast/b1e9e52177c78752178bb4d00ee0c02b/41.330103,-81.358794