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

const friends = [`Juan`, `Derek`, `Colton`];
console.log(friends);

// const years = new Array(1995, 1984, 2000, 2025);
// console.log(years);


console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'David';
console.log(friends);

const firstName = `Dominick`;
const dominick = [firstName, `Smith`, 2025 - 2000, `Data Center Technician`, friends];

console.log(dominick);
console.log(dominick.length);

// Excercise
const calcAge = function (birthYear) {
  return 2025 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = [`Juan`, `Derek`, `David`];

// Add Elements
const newLength = friends.push(`Colton`);
// console.log(newLength);
console.log(friends);

friends.unshift(`Parker`);
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf(`Derek`));
console.log(friends.indexOf(`Parker`));

friends.push(23);
console.log(friends.includes(`Derek`));
console.log(friends.includes(`Parker`));
console.log(friends.includes(`23`)); // Checks for strict equality, no type conversion using includes method
console.log(friends.includes(23));

if (friends.includes(`Derek`)) {
  console.log(`You have a friend named Derek`);
}

const dominick = {
  firstName: `Dominick`,
  lastName: `Smith`,
  age: 2025 - 2000,
  job: `Data Center Technician`,
  friends: [`Johnny`, `Mario`, `Gabe`]
};

// console.log(dominick);

// Dot Notation

// console.log(dominick.lastName);

// Bracket Notation

// console.log(dominick[`lastName`]);

// const nameKey = `Name`;
// console.log(dominick[`first` + nameKey]);
// console.log(dominick[`last` + nameKey]);

// console.log(dominick.`last` + nameKey);

// const interestedIn = prompt(`What do you want to know about Dominick? Choose between firstName, lastName, age, job, and friends`);
// console.log(interestedIn);


// if (dominick[interestedIn]) {
  // console.log(dominick[interestedIn])
// } else {
  // console.log(`Wrong request!`)
// }

// dominick.location = `Texas`;
// dominick[`youtube`] = `@y2kdom`;
// console.log(dominick);


//Challenge
// Dominick has 3 friends, and his best friend is Johnny

// console.log(`${dominick.firstName} has ${dominick.friends.length} friends, and his best friend is named ${dominick.friends[0]}.` )


const dominick = {
  firstName: `Dominick`,
  lastName: `Smith`,
  birthYear: 2000,
  job: `Data Center Technician`,
  friends: [`Johnny`, `Mario`, `Gabe`],
  hasDriversLicense: true,

//  calcAge: function(birthYear) {
//    return 2025 - birthYear;
//  }

//  calcAge: function () {
//    // console.log(this);
//    return 2025 - this.birthYear;
//  }
    calcAge: function() {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
    getSummary: function() {
    this.summary = `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and ${this.hasDriversLicense ? 'has': "doesn't have"} their drivers license.`;
    return this.summary
  }
};


// console.log(dominick.age);
// console.log(dominick.age);
// console.log(dominick.age);

// console.log(dominick[`calcAge`](2000));

console.log(dominick.getSummary())

//console.log(`Lifing weights repetition 1`);
//console.log(`Lifing weights repetition 2`);
//console.log(`Lifing weights repetition 3`);
//console.log(`Lifing weights repetition 4`);
//console.log(`Lifing weights repetition 5`);
//console.log(`Lifing weights repetition 6`);
//console.log(`Lifing weights repetition 7`);
//console.log(`Lifing weights repetition 8`);
//console.log(`Lifing weights repetition 9`);
//console.log(`Lifing weights repetition 10`);



// for loop keeps running while condition is TRUE
for(let rep = 1; rep <=9; rep ++) {
  console.log(`Lifting weights, repetition ${rep}`)
}

const dominick = [`Dominick`, `Smith`, 2025 - 2000, `Data Center Technician`, [`Juan`, `Derek`, `David`], true];
const types = [];

for (let i = 0; i < dominick.length ; i++) {
  console.log(dominick[i], typeof(dominick[i]));
  types.push(typeof(dominick[i]));const dominick = [`Dominick`, `Smith`, 2025 - 2000, `Data Center Technician`, [`Juan`, `Derek`, `David`], true];
};

console.log(types);

const years = [2000, 2001, 1999, 2012];
const ages = [];

for (let age = 0; age < years.length ; age ++) {
  ages.push(2025 - years[age]);
};

console.log(ages);

// continue and break
for (let i = 0; i < dominick.length ; i++) {
  if (typeof dominick[i] !== 'string') continue;
  console.log(dominick[i], typeof(dominick[i]));
};

for (let i = 0; i < dominick.length ; i++) {
  if (typeof dominick[i] === 'number') break;
  console.log(dominick[i], typeof(dominick[i]));
};

const dominick = [`Dominick`, `Smith`, 2025 - 2000, `Data Center Technician`, [`Juan`, `Derek`, `David`], true];

for (let i = dominick.length - 1; i >= 0 ; i--) {
  console.log(i, dominick[i]);
}

for (let excercise = 1; excercise <=4; excercise ++) {
  console.log(`------- Starting Exercise ${excercise}`);
  for (let repetition = 1; repetition <=6; repetition ++) {
    console.log(`Excercise ${excercise}: Lifting Weights: repetition ${repetition}`);
  }
};

*/

let rep = 1;

while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repertiton ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a ${dice}`);

}
