const request = require('request');

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address)
    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=kh0VX4AjrfPVGpCXwkEIJD8Lgq80XQly&location=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Mapquest servers')
      } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
        reject('Unable to find that address')
      } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
        resolve({
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    })
  })

}

geocodeAddress('435 club dr w aurora').then((location) => {
  console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
  console.log(errorMessage)
})