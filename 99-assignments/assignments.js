// Values and Variables Assignment
const country = "United States of America";
const continent = "North America";
let population = 346000000;

console.log(continent);
console.log(country);
console.log(population);


// Data Types Assignment
const isIsland = false;
let language;
/*
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// let, const and var Assignment

language = 'English';
//isIsland = true;

// Basic Operators Assignment

halfPopulation = population / 2;
console.log(halfPopulation);
halfPopulation++;
console.log(halfPopulation);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);
averagePopulation = 33000000;
console.log(population > averagePopulation);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

// Strings and Template Literals Assignment

description = `${country} is in ${continent}, and its ${population} million people speak ${language}!`;
console.log(description);

// Taking Decisions: if / else Statements Assignment

if(population > averagePopulation) {
  console.log(`${country}'s population is ${population - averagePopulation} people above average`);
}
population = 13000000;
if(population > averagePopulation) {
  console.log(`${country}'s population is ${population - averagePopulation} people above average`);
} else {
  console.log(`${country}'s population is ${averagePopulation - population} people below average`);
}

// Type Conversion and Coercion Assignment

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/
// Equality Operators: == vs. === Assignment

// const numNeighbors = Number(prompt(`How many neighbor countries does your country have?`));

// if (numNeighbors === 1){
  // console.log(`Only 1 border`);
// } else if (numNeighbors > 1){
  // console.log(`More than 1 border`);
// } else{
  // console.log(`No borders`);
// }

// We should use === and type conversion when we are seeking precise comparison or strict comparison.

// Logical Operators Assignment

// if(language === 'English' && population < 50000000 && !isIsland) {
  // console.log(`You should live in ${country} :)`);
// } else {
  // console.log(`${country} does not meet your criteria :(`);
// }

// The switch statement Assignment
// language = (prompt(`Enter a language`));

//switch (language) {
//  case 'chinese':
//  case 'mandarin':
//    console.log(`Most number of native speakers!`);
//    break;
//  case `spanish`:
//    console.log(`2nd place in number of native speakers`);
//    break;
//  case `english`:
//    console.log(`3rd place`);
//    break;
//  case `hindi`:
//    console.log(`Number 4`);
//    break;
//  case `arabic`:
//    console.log(`5th most spoken language`);
//    break;
//  default:
//    console.log(`Great language too :D`);
//    break;
//}

// The conditional ternary operator Assignment
console.log(`${country}'s population is ${population>33000000 ? 'above' : 'below'} average!`)
