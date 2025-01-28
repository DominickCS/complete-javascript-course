// Use Strict Mode
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 534;
*/

function logger() {
console.log('My name is Dominick');
}

// calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples, and ${oranges} oranges!`;
  return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);

function getUsername () {
  const username = prompt(`What is your username`);
  return username;
}

const currentUser = getUsername();
console.log(`Hello ${currentUser}!`);
