// Given an array, write a function to return true if the sum of any two numbers in the array is zero.

let checkForZeroSum = function(arr) {
  // Create a map to hold the key value pair
  let map = new Map;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // We check what's in the map and return true if the map has a value that makes the sum zero
    if (map.get(-arr[i])) {
      return true;
    }
    // The rest is redundant ;)
    if (map.get(arr[i])) {
      let count = map.get(arr[i]);
      map.set(arr[i], count + 1);
    }
    else {
      map.set(arr[i], 1);
    }
  }
  return false;
}

checkForZeroSum([1, 3, -4, 4, 6, 3, 1, -1, -3]);
