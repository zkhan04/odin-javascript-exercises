const convertToCelsius = function(tempFahrenheit) {
  let celsius = (tempFahrenheit - 32) / 1.8;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(tempCelcius) {
  let fahrenheit = tempCelcius * 1.8 + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
