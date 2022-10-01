'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};
*/

// *Logical Assignment Operators

/*
// OR assigmnment operator

// It assigns a value to a variable if that variable is currently falsy
// rest1.numGuests = rest1.numGuests || 10; // since numGuests is truthy it doesn't assign
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assigmnment operator (null or undefined)
// It assigns a value to a variable if that variable is currently nullish
rest1.numGuests ??= 10; // return 0
rest2.numGuests ??= 10; // 10 since there is no numGuests

// AND assigmnment operator

//rest1.owner = rest1.owner && '<ANONYMOUS>';
// the first value is truthy, so it isn't returned. then it checks the second one and return it since it is the last number even though it is truthy
//rest2.owner = rest2.owner && '<ANONYMOUS>';

// &&= assigns a value to a variable if it is currently truthy
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

// *The Nullish Coalescing Operator (__)

/*
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nulish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

// *Short Circuiting (&& and __)
/*
console.log('---- OR ----');

// Use ANY data type, return ANY data type, short circuiting
// in OR operator the result is true if at least one operand is true
// we can use OR operator to set default values
console.log(3 || 'Jonas'); // values are not boolean and it still returns 3 value
console.log('' || 'Jonas'); // first string is falsy, so it shows Jonas
console.log(true || 0);
console.log(undefined || null); // undef is falsy, so it shows null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello, since it first truthy

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //sets 10 if numGuests is false
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// we can to use AND operator to execute code in the second operand
// && returns first falsy value
console.log('---- AND ----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
// if orderPizza exists, we call it with the pars
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// if orderPizza exists, we call it with the pars
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/

// *Rest Pattern and Parameters
// It uses the exact same syntax as spread operator but to collect multiple
// elements and condence them into an array
// it packs elements into an array
// with spread operator we expand, with rest operator we compress
// 1) Destructuring
/*
// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
// rest pattern collects the elements that are unused in the destructuring assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// REST el must be the last el in arr
// and there can be only one REST in any destructuring assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
// REST syntax takes multiple values or numbers and pack them into one arr

// here x is collected by rest parameters
// ... numbers is the rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x); // spread operator unpacks the x array

// rest par serves to collect all remaining pars
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

// the spread and rest pars look exactly the same but they work in opposite ways depending on where they are used. the spread is used where we otherwise write values separated by a comma, on the other hands the rest used when we otherwise write variable names separated by commas
// *The Spread Operator (...)
// It needs to build new arrays or to pass multiple values into a function
// we expand an array into induvidual elements
// it unpacks an array
/*
// adding values from other arr
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// new better way of adding
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9] it shows the arr in console

console.log(...newArr); // 1, 2, 7, 8, 9 now it shows numbers in console
console.log(1, 2, 7, 8, 9); // 1, 2, 7, 8, 9 

// adding 'Gnocci' to mainMenu list
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

*/
/*
  Iterables are arrays, strings, maps, sets. NOT objects.
  We can only use the sp operator when building an array 
  or pass values into a function
*/
/*
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['J' 'o' 'n' 'a' 's' ' ' 'S.']
// or
console.log(...str); // J o n a s
console.log('j', 'o');
//console.log(`${...str} Shmedtmann`); // Unexpected token. (only building an array or passing to func)

// Real world example
const ingredients = [
  //prompt("Let's make pasta! Ingredient 1?"),
  //prompt('Ingredient 2?'),
  //prompt('Ingredient 3?'),
];
console.log(ingredients);
// old way passing props
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); ///ingdts are values from prompt

// Objects spread syntax
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// *Destructuring objects

/*
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);
*/

// *Mutating variables

/*
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

// *Nested objects

const { fri: {open: o, close: c} } = openingHours;
console.log(o, c);
*/

// *Destructuring arrays

/*
// retrieving elems
const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];

// es6 destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4
console.log(arr);


let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
*/
// old way to switch main and sec / switching variables
/*
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

/*
// new one
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/
