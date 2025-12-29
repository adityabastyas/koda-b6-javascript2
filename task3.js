// F = (C * 9/5) + 32
// K = C + 273.15
// R = C * 4/5

const temperature = {
  base: 0,
  toFahrenheit: function fahrenheit() {
    return (this.base * 9) / 5 + 32;
  },

  toKelvin: function kelvin() {
    return this.base + 273.15;
  },

  toReamur: function reamur() {
    return (this.base * 4) / 5;
  },
};

temperature.base = 10;

console.log(temperature.toFahrenheit());
console.log(temperature.toKelvin());
console.log(temperature.toReamur());
