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

// Functions Assignment

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description
}

const describeUSA = describeCountry(`The United States`, 346, `Washington DC`);
const describeJapan = describeCountry(`Japan`, 37 ,`Tokyo`);
const describeSwitzerland = describeCountry(`Switzerland`, 8.9 , `Bern`);

console.log(describeUSA);
console.log(describeJapan);
console.log(describeSwitzerland);

// Function Declarations vs Expressions
function percentageOfWorld1(population) {
  return `${(population / 8097) * 100} %`;
}

const perUSA = percentageOfWorld1(346);
const perIndia = percentageOfWorld1(1419);
const perChina = percentageOfWorld1(1407);
console.log(perUSA);
console.log(perIndia);
console.log(perChina);

const percentageOfWorld2 = function(population) {
  return `${(population / 8097) * 100} %`;
}

const perUSA2 = percentageOfWorld2(346);
const perIndia2 = percentageOfWorld2(1419);
const perChina2 = percentageOfWorld2(1407);
console.log(perUSA2);
console.log(perIndia2);
console.log(perChina2);

// Calling functions inside other functions Assignment
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world`;
}


const descUSA = describePopulation(`The United States of America`, 346);
const descIndia = describePopulation(`India`, 1419);
const descChina = describePopulation(`China`, 1407);

console.log(descUSA);
console.log(descIndia);
console.log(descChina);

// Arrays Assignment

const populations = new Array(346, 8.9, 37, 1419);

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// Introduction to Objects Assignment

const myCountry = {
  country: `United States of America`,
  capital: `Washington DC`,
  language: `English`,
  population: 346,
  neigbors: [`Canada`, `Mexico`]
}

// Dot Vs Bracket Notation Assignment

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neigbors.length} neighboring countries and a capital of ${myCountry.capital}`)

myCountry.population += 2;
console.log(myCountry.population);
myCountry[`population`] -= 2;
console.log(myCountry.population);


