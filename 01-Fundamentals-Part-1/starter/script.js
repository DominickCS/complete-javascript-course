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

*/

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
