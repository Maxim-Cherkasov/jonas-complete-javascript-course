'use strict';
/*
function calcAge(birthYear) {
  let age = 2037 - birthYear;
  
  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reassigning outer scope's variable
      output = 'New output!';

      const str = `Oh, you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return (a + b);
      }
    }

    
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
    
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// Hoisting

// Variables Hoisting
/*
console.log(me);
console.log(job);
console.log(teacher);
*/

//var me = 'Jonas'; // undefined
let job = 'teacher'; // can't be called before initialization
const teacher = '1991';


// Functions Hoisting

//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow);
//console.log(addArrow(2, 3));

/*
function addDecl(a, b) { // we can call it before it was defined in the code
  return a + b;
}

const addExpr = function(a, b) { // it is in a temporaral death zone and indefined
  return a + b;
}

var addArrow = (a, b) => a + b; // undefined
*/

// Example
/*
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
*/
/*
  Always declare functions first, and then use them

  Don't use var and declare const and let at the top of the scope

  You can call function declaration before declare it, but just don't do that,
  it is just not clean
*/
/*
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// This keyword/variable

/*
  It is a special variable that is created for every execution context (every function).
  Takes the value of (points to) the 'owner' of the function in which the this keyword is used.

  *this* is not static. It depends on how the function is called, and its value is only assigned, when the function is actually called.
*/

// Four ways of calling functions

// 1. Method
/*
const jonas = {
  name: 'Jonas';
  year: 1989;
  caclAge: function() {
    return 2037 - this.year; // same as *jonas.year* but better
  }
};

jonas.calcAge();
*/

// 2. Simple function call (!only in strict mode to avoid problems)

// 3. Arrow functions (they do not get their own keyword)
// they get 'this' of surrounding function (lexical this)

// 4. Event listener
// 'this' keyword will always point to the DOM element that the
// handler function is attached to

// 'This' never does'nt point to the function itself, and also not the 
// its variable environment


// *This keyword in action
/*
//console.log(this); // window in console
// A regular function call - it means a function that not being attached to 
// any object, without having an owner
const calcAge = function(birthYear) {
  //console.log(2037 - birthYear);
 // console.log(this); // undefined since we are in strict mode
}
calcAge(1991);


const calcAgeArrow = birthYear => {
  //console.log(2037 - birthYear);
  //console.log(this); // window in console. arrow func doesn't get its keyword
  // and it uses its parent scope 
}
calcAgeArrow(1980);
*/
/*
  When we have a method call, the this keyword inside of the method will be the object that is calling the method
*/
/*
const jonas = { // jonas here is the owner of the method
  year: 1991,
  calcAge: function() { // calcAge method inside jonas object
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();


const matilda = {
  year: 2017,
};

// Here we copy the calcAge method from jonas oject to matilda. It is called
// method borrowing, and we don't need to duplicate it.
// *This kyeword is dynamic and depends on how a function is called
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// We copy the function into f variable. Any fuction is juct a value
//const f = jonas.calcAge;
//f(); // 'this' keyword is now undefined and not exist. it happens bcz this function is now just 
// a regular function. it is not attached to any object. there is no owner of this f function anymore
*/

//? Arrow function vs Regular functions and this keyword

// var firstName = 'Matilda';

const jonas = { 
  firstName: 'jonas',
  year: 1991,
  calcAge: function() { 
    //console.log(this);
    console.log(2037 - this.year);

    /* Solution 1
    const self = this; // it also can be called self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    }
    */

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }

    isMillenial(); // inside a regular function call the this keyw must be undefined
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // Hey Undefined
  },
};

jonas.greet();
jonas.calcAge();

/* Conclusion
  ! never use arrrow function as method even without 'this' keayword
*/

// Arguments keyword
/*
const addExpr = function(a, b) { 
  console.log(arguments);
  return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 7, 12);


var addArrow = (a, b) => {
  console.log(arguments); // arguments keyw only exists in regular functions
  return a + b; 
}

addArrow(2, 5, 8);
*/


// Primitives vs Objects

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);


const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}
const marriedJessica = jessica; // it is not a new object in the heap but a reference to original obj
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
//  marriedJessica = {};

/*
  Completely changing the object,so assigning a new object to it is 
  completely different than simply changing the property as in 
  marriedJessica.lastName = 'Davis';
*/

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2); // this will create a completely new object where all properties are really copied

jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);