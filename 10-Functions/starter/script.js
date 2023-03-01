'use strict';

//* Subjucts here is not in order, but as i learn them when i need

/* 
  We don't create closures manually like we create a new array or a new function.
  A closure simply happens automatically in certain situations. We just need to recognize these situations.

  The closure makes a function remember all the variables that existed at the function's birthplace. secureBooking is the birthplace of the func it returns, which also is booker now.

  The secret of the closure is: any function always has access to the variable environment of the execution context in which the function was created.

  The booker function was created in the execution context of secureBooking.

  Closure: Variable Enviroment attached to the function, exactly as it was at the time and place the function was created even after that execution context is gone.

  Closure gives a function access to all the variables of its parent function, even after the parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain thoughout the time.

  Closure is like a backpack that has all the variables that were present in the environment where the function was created.

  The booker function has access to the passengerCount variable because it's basically defined in the scope in which the booker function was created.

  Now the booker function closed over its parent scope or over its parent variable evironment. And in general it incudes all functions argument though in this case we don't have any.

  Closure: a function does'nt loose connection to variables that existed at the function's birthplace.

  However passengerCount variable is not in the current scope and so JavaScript will immediately look into the closure and see if it can find the variable there.
  And it does this even before looking at the scope chain.

  So the closure basically has priority over the scope chain.
*/

// Closures

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

///////////////////////////////////////
// More Closure Examples
// Example 1

// The a vaiable is in a backpack of the f function here

/*
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);
*/

// Example 2

/*
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

///////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
