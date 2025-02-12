// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperaturesOne = [3,-2,-6,-1, `error`, 9, 13, 17, 15, 14, 9, 5];
const temperaturesTwo = [4,2,7,34, `error`, 34 -63,-9385, 4, 2304];

// 1) Understanding the problem
// What is temp amplitude?
// Difference between the highest and lowest temp, return this value from the function we write
// How would we compute max and min temperatures?
// What's a sensor error? What do we do with it?
//
//
// 2) Breaking up into sub-problems
// How to ignore errors?
// Find max value in the temperatures array
// Find min value in the temperatures array
// Subtract min from max (amplitude) and return it

const calcTempAmplitude = function(tempsArray1, tempsArray2) {
  const finalTemps = tempsArray1.concat(tempsArray2);
  let maxTemp = finalTemps[0];
  let minTemp = finalTemps[0];


  for (let i = 0; i < finalTemps.length; i++) {
    if(typeof finalTemps[i] === 'number') {
      if (finalTemps[i] > maxTemp) maxTemp = finalTemps[i];
      if (finalTemps[i] < minTemp) minTemp = finalTemps[i];
    } else {
      console.log(`${finalTemps[i]} is not a number!
this data is located at array index ${i}`);
      continue;
    }
  }

  console.log(`The minimum temperature in the array was ${minTemp},
and the maximum temperature was ${maxTemp}.`)

  let amplitude = maxTemp - minTemp;
  return(amplitude);
  };


// calcTempAmplitude([3, 4, 5, 6, 7, 8, 192]);
console.log(calcTempAmplitude(temperaturesOne, temperaturesTwo));


// Problem 2:
// Function shouuld now receive two arrays of temperatures
// With two arrays do we need to implement two functions?
// How to merger two arrays
//
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures
// Example: (17, 21, 23)


const printForecast = function(arr) {
  let forecast = "";
  for(let i = 0; i < arr.length; i++) {
    forecast = forecast + `...${arr[i]}° in ${i + 1} days... `
  }
  return(forecast);
}

const arrOne = [17, 21, 23];
const arrTwo = [12, 5, -5, 0, 4];

console.log(printForecast(arrOne));
console.log(printForecast(arrTwo));

// Challenge #2
//

const trackTime = function(arr) {
  let totalHours = 0
  let averageDailyHours, dayMostHours = 0, fullTime, daysWorked = 0
  for(let i = 0; i < arr.length; i++) {
    totalHours += arr[i];
    if(arr[i] > 0) {
      daysWorked += 1;
    }

    if(arr[i] > dayMostHours) {
      dayMostHours ++;
    }
  }

  if (dayMostHours === 0){
    dayMostHours = "Monday";
  } else if (dayMostHours === 1) {
    dayMostHours = "Tuesday";
  } else if (dayMostHours === 2) {
    dayMostHours = "Wednesday";
  } else if (dayMostHours === 3) {
    dayMostHours = "Thursday";
  } else if (dayMostHours === 4) {
    dayMostHours = "Friday";
  } else if (dayMostHours === 5) {
    dayMostHours = "Saturday";
  } else if (dayMostHours === 6) {
    dayMostHours = "Sunday";
  }

  if (totalHours >= 35) {
    fullTime = true;
  } else {
    fullTime = false;
  }

  averageDailyHours = (totalHours / daysWorked);

  return `1. Total Hours - ${totalHours}
2. Average Daily Hours - ${averageDailyHours}
3. The day with the most hours worked was ${dayMostHours}
4. Number of days worked - ${daysWorked}
5. ${totalHours} hours indicates that you worked ${fullTime ? "full-time":"part-time"} this week.`
}

const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(trackTime(data));
