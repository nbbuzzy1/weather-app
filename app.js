const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

const encodedAddress = encodeURIComponent(argv.address)

request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=kh0VX4AjrfPVGpCXwkEIJD8Lgq80XQly&location=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Mapquest servers')
  } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
    console.log('Unable to find that address')
  } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
    console.log(`Address: ${body.results[0].providedLocation.location}`);
    console.log(`Latitude ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude ${body.results[0].locations[0].latLng.lng}`);
  }
});