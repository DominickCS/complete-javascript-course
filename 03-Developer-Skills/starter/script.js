// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3,-2,-6,-1, `error`, 9, 13, 17, 15, 14, 9, 5];

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

const calcTempAmplitude = function(temps) {
  let maxTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > maxTemp) maxTemp = temps[i];
    }
  console.log(maxTemp);
  };

calcTempAmplitude([3, 4, 5, 6, 7, 8, 192]);
