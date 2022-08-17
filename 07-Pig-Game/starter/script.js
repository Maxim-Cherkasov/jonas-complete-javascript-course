'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0; // JS will automatically convert the number to a string, to display it on a page.
score1El.textContent = 0;


diceEl.classList.add('hidden');

