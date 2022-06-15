// every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name = require('./03-name');
const sayHi = require('./04-functionDef');
const data = require('./05-alternativeSyntax')
require('./06-unique-export'); // doesnot require any variable to invoke
// const secret = "Super Secret";
// const haris = "Haris";
// const Ahmed = "Ahmed";

sayHi("Ahsan");
// sayHi(name.haris);
// sayHi(name.ahmed);

console.log(data);