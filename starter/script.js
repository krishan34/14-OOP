'use strict';

// constructor function.

const Person = function (firstName, lastName, birthyear) {
  // Storing date in the Object.
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthyear = birthyear;

  // Never add method in the consturtor function it create mulitple copies.

//   this.calcAge = function () {
//     console.log(2037 - this.birthyear);
//   };
// };

// constructor called with new keyword.

const krish = new Person('krish', 'chikara', 1986);
console.log(krish);

// 1. Create empty object.
// 2. function call this keyward set to empty object.
// 3. linked to prototype(is like blueprint)
// 4. Autmatically returned empty object from the begining.
