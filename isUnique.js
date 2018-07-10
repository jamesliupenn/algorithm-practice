// isUnique checks to see if the characters within a string are unique.
// i.e. "practice" will return false since there are 2 c's, whereas "unwatch" will return true.

function isUnique(str) {
  // Create a new hash map to store the results of our checks
  var characterMap = new Map();

  // Iterate through the given string
  for (var i = 0; i < str.length; i++) {
    // Check if the character exists in the hash map
    if (!characterMap.has(str[i])) {
      // If character does not exist, create in the hash map
      characterMap.set(str[i], 1);
    }
    // If character exist, simply return false to save us some time
    else {
      return false;
    }
  }
  // Return true once the string has been checked
  return true;
}

