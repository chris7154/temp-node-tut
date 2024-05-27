// CommonJS, every file in Node is module (by default)
// Modules - Encapsulated Code (only share minimum )
// Nodes have bunch of built-in modules that we can use freely in our.
// Some of the built-in modules includes OS, PATH, FS, HTTP


const names = require('./4-names')
const sayHi = require('./5-util')
require('./7-mind-grenade')



sayHi('susan')
sayHi(names.john)
sayHi(names.peter)