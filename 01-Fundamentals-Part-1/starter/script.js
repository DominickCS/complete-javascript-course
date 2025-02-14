/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Log the value 'Dominick' to the console.
console.log('Dominick');
// Log the value 23 to the console.
console.log(23);

// Variable definition.
let firstName = 'Dominick';

// Log the value of firstName to the console.
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.14159;

let myFirstJob = 'Whataburger';
let myCurrentJob = 'Data Center Technician';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// Logging the data types of different data types
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Dominick");

// Demo of dynamic typing, reassigning a variable to a new value
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// The declaration of an empty variable sets the value and type to undefined
let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(year);       
console.log(typeof year);

// Similarly to an empty string, type of null SHOULD BE null but due to legacy support, null is an object
console.log(typeof null);

// The age variable is mutated from the value 30, to the value 24.
let age = 30;
age = 24;

// Const variables are immutable (cannot be changed)
const birthYear = 2000;
// birthYear = 2001;

// Const needs a value initializer
//const job;


// While this code works, we should stay away from var for now
var job = 'Programmer';
job = 'Technician';

// This doesn't create this variable in the current scope, make sure to clearly declare a variable.
lastName = 'Smith';
console.log(lastName);

const now = 2037;
const ageDominick = now - 2000;
const ageCristian = now - 2001;

console.log(ageDominick, ageCristian);

console.log(ageDominick * 2, ageDominick / 10, 2**3);
// 2 ** 3 means 2 to the power of 3 or 2 * 2 * 2

const firstName = 'Dominick';
const lastName = 'Smith';

console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x --; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageDominick > ageCristian); // >, <, >=, <=
console.log(ageDominick >= 18);

const isFullAge = ageDominick >= 18;
console.log(now - 2000 > now - 2018);


const now = 2037;
const ageDominick = now - 2000;
const ageCristian = now - 2001;

console.log(now - 2000 > now - 2018);

console.log(25 -10 - 5);;

let x, y;

x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);

const averageAge = (ageDominick + ageCristian) / 2;
console.log(ageDominick, ageCristian, averageAge);

const firstName = 'Dominick';
const job = 'Data Center Technician';
const birthYear = 2000;
const currentYear = 2025;

const dominick = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(dominick);

// Template Literals

const dominickNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(dominickNew);

console.log(`Hello World!\nThis is a regular string`);

console.log('String with \n\
  multiple \n\
  lines');

console.log(`String
witih multiple
lines.
No Need for backslash N!`)


const age = 15;

if(age >= 18) {
  console.log(`Dominick can start driving license!`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Dominick cannot start driving license!, he has ${yearsLeft} years left before he is eligible.`);
}

const birthYear = 2000;
let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
// Interestingly, I was born in the 20th century!
console.log(century);


// Type Conversion
const inputYear = '2000';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Dominick'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercision

console.log('I am ' + 24 + ' years old'); 

console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');


let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 Falsy Values: 0, '', undefined, null, NaN
// All of these values will be false when converted into a boolean

console.log(Boolean(0)); // 0 => Falsy Value
console.log(Boolean(undefined)); // undefined => Falsy Value
console.log(Boolean('Dominick')); // Non-empty String => Truthy Value
console.log(Boolean({})); // Empty Object => Truthy Value
console.log(Boolean('')); // Empty String => Falsy Value

let money;
if(money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if(height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}


const age = '18';

if(age === 18) console.log(`You just became an adult :D (strict)`);
if(age == 18) console.log(`You just became an adult :D (loose)`);

const favoriteNum = Number(prompt(`What's your favorite number?`));
console.log(favoriteNum);
console.log(typeof(favoriteNum));

if (favoriteNum === 21) {
  console.log(`Cool! 21 is an amazing number!`);
} else if(favoriteNum === 7) {
  console.log(`7 is also a cool number!`);
} else if(favoriteNum === 9) {
  console.log(`9 is also a cool number!`);
} else {
  console.log(`Number is not as cool as 21, 7, or 9 :P`);
}

if (favoriteNum !== 21) console.log(`Why not 21?`);


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // and operator
console.log(hasDriversLicense || hasGoodVision); // or operator
console.log(!hasDriversLicense); // not operator


// if(hasDriversLicense && hasGoodVision) {
  // console.log(`Dominick is able to drive!`);
// } else {
  // console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // or operator

if(hasDriversLicense && hasGoodVision && !isTired) {      
  console.log(`Dominick is able to drive!`);  
} else {                                      
  console.log(`Someone else should drive...`);
}                                             

const day = `monday`;
// let day;

// console.log(`Today's itenerary is:`);

switch(day) {
  case `monday`: // day === `monday`
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case `tuesday`:
    console.log(`Prepare theory videos`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`Write code examples`);
    break;
  case `friday`:
    console.log(`Record videos`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === `monday`) {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if(day === `tuesday`){
  console.log(`Prepare theory videos`);
} else if(day === `wednesday` || day === `thursday`) {
  console.log(`Write code examples`);
} else if (day === `friday`) {
  console.log(`Record Videos`);
} else if (day === `saturday` || day === `sunday`) {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log(`Not a valid day!`);
}


3 + 4 // Expression
2000 // Expression, will produce a value
true && false && !false // Expression

if (24 > 10) { // statement, it doesn't produce a value
  const str = `24 is bigger`; 
}

console.log(`I'm ${2037 - 2000} years old.`);

const age = Number(prompt(`Enter your age`));
age >= 21 ? console.log('I like to drink wine'): 
console.log(`I like to drink water`);

const drink = age >= 21 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 21) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >=21 ? 'wine' : 'water'}!`);

*/
