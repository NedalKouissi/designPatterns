const singleton = (function () {
  let instance

  function Singleton (opts) {
    Object.assign(this, opts)

    // here you can have your public and private function like a separated
    // module
  }

  return {
    init: opts => {
      if (!instance) instance = new Singleton(opts)
      return instance
    }
  }
}())

const mySingletonModule1 = singleton.init({
  firstName: 'Nedal',
  lastName: 'Kouissi',
  age: 22
})
console.log(mySingletonModule1)
