const yargs = require('yargs');
const axios = require('axios');

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
  const geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=kh0VX4AjrfPVGpCXwkEIJD8Lgq80XQly&location=${encodedAddress}`

  axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'A1XAX') {
      throw new Error('Unable to find that address');
    }
    const lat = response.data.body.results[0].locations[0].latLng.lat;
    const lng = response.data.body.results[0].locations[0].latLng.lng;
    console.log(response.data.results[0].formatted_address);
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.')
    } else {
      console.log(e.message);
    }
  });