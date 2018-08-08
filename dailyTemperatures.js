// dailyTemperatures takes in a given array of temperatures, and returns an array of how many days 
// you'll wait until you get a warmer day.

let dailyTemperatures = function(temps) {
  // Stores the length of the original array as it is how many elements we'll need to be dequeuing
  let lenOfTemp = temps.length;
  let result = [];
  let firstElement;

  // Attempt to dequeue an element at a time
  for (let i = 0; i < lenOfTemp; ++i) {
    let count = 0;
    firstElement = temps.shift();

    // We check for the temperature comparisons for every dequeued element and the remainder array. Append the counter to the result.
    result.push(checkTemp(firstElement, temps));
  }
  return result;
};

// The method to check an element with an array
let checkTemp = function(firstElement, temps) {
  // Iterate through the array
  for (let i = 0; i < temps.length; i++) {
    // If the array elements is greater than our base element, return the index+1, marking how many count it takes to get to a greater value
    if (temps[i] > firstElement) {
      return i+1;
    }
  }
  // If no greater value is found, return zero
  return 0;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
