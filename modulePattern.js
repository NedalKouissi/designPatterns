/////////
// ES6 //
/////////
class myModule {
  constructor () {}

  myFunction () {}
}

export default myModule

// in other file
import {myModule} from '.src/myModules'

// Reference: adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// //////////////////////////////////////////////
// In general : can be use in one single file //
// //////////////////////////////////////////////
const myModule = (function (doc, win) {
  let counter = 0

  return {
    increment: _ => ++counter,
    decrement: _ => --counter,
    log: _ => console.log(counter)
  }
}())

// USAGE:
myModule.increment()
myModule.decrement()
myModule.log()

// //////////////////////////////////////////////////////////////////////
// Augmentaion                                                        //
// split the module in multiple files                                 //
// First file should init the myModule then child files could augment //
// //////////////////////////////////////////////////////////////////////
let myModule = (function (my) {
  my.anotherMethod = _ => console.log('AnotherMethod!')
  return my
}(myModule))

// ////////////////////////////////////////////
// Loose augmentation                       //
// Load in any order, by using script async //
// ////////////////////////////////////////////
let myModule = (function (my = {}) {
  // add stuff to your module 'my'
  return my
}(myModule))

// ///////////////////////////////////////////////////////////////
// Tight augmentation                                          //
// in loose augmentation you can't use your module properties  //
// in initialization phase, but you can in run time            //
// also, you can't override module properties safely           //
// I do need myModule to be initialized                        //
// ///////////////////////////////////////////////////////////////
myModule = (function (my) {
  const oldMethodRef = my.oldMethod
  my.oldMethod = function () {
    // here i have access to oldMethodRef
  }

  return my
}(myModule))

/////////////////////////////
// Cloning and inheritance //
/////////////////////////////
let myModuleTwo = (function (originalModule) {
  let my = {}

  // Clone 'originalModule' properties reference into 'my'
  let key
  for (key in originalModule) {
    if (originalModule.hasOwnProperty(key)) {
      my[key] = originalModule[key]
    }
  }

  // Do some changes or overrides if you want to
  let supreModuleMethod = originalModule.oldMethod
  my.method = function () {
    // again i have access to supreModuleMethod
    // so i can override originalModule.oldMethod safely
  }

  return my
}(myModule))

// Cross file private state
// Sharing your module across multiple files cannot let you know
// the state of each module, so ?
let myModule = (function (my = {}) {
  let private = my.private = my.private || {}
  let seal = my.seal = my.seal || function () {
    delete my.private
    delete my.seal
    delete my.unseal
  }
  let unseal = my.unseal = my.unseal || function () {
    my.private = private
    my.seal = seal
    my.unseal = unseal
  }

  // permenant access to private, seal, unseal

  return my
} (myModule))

/////////////////
// Sub modules //
/////////////////
myModule.sub = (function() {
  // ...
  return {
    // ...
  }
} ())