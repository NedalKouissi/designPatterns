function Car (model, year) {
  this.model = model
  this.year = year
}

Car.prototype.toString = function () {
  return `${this.model}, ${this.year}`
}

// USAGE:
const ferrari = new Car('ferrari', 2015)
console.log(ferrari.toString())
