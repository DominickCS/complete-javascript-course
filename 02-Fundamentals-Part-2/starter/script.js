// Use Strict Mode
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 534;

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

// Function Declaration
// Can call function before initalized with Declaration (due to hoisting)

const age1 = calcAge1(2000);

function calcAge1 (birthYear) {
  return 2025 - birthYear;
}

console.log(age1);

// Anonymous Function or Function Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);


// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(2000, `Dominick`));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange!`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

const calcAge = function(birthYear) {
  return 2025 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years!`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
}

console.log(yearsUntilRetirement(2000, `Dominick`));
console.log(yearsUntilRetirement(1953, `Westmooreland`));
