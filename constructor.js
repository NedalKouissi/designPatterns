// ES6
class car {
  constructor (opt) {
    Object.assign(this, opt)
  }

  toString () {
    return `${this.model}, ${this.year}`
  }
}

// USAGE:
const ferrari = new Car({
  model: 'ferrari',
  year: 2015
})
console.log(ferrari.toString())

// ES5
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
