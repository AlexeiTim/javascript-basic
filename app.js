const cities = {
  mask: {
    temp: {
      celcius: 25
    }
  },
  spb: {

  }
}
const city = 'spb';
if (cities[city] != undefined && cities[city].temp != undefined) {
  console.log(cities[city].temp.celcius);
}

console.log(cities[city]?.temp?.celcius);
