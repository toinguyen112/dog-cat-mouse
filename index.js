var Dog = require('./Dog');
var Cat  = require('./Cat');

var dog = new Dog('Susu');
var tom = new Cat();

dog.eat(tom);

console.log(dog);