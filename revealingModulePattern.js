const myModule = (function () {
  const name = 'albert'
  const age = 15

  const getName = _ => name
  const getAge = _ => age
  const setName = newName => name = newName
  const setAge = newAge => age = newAge

  // We chenged the name of our private methods by setting new pointer
  // that's much better than the normal module pattern
  return {
    updateName: setName,
    updateAge: setAge
  }
}())
