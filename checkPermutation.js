// checkPermutation checks to see if a string is a permutation of another given string.
// The characters within the string can be reconstructed in a different order as permutations.
// i.e. "projects" is a permutation of "sctjrope"

function checkPermutation(str1, str2) {
  // Base case - string length doesn't match
  if (str1.length != str2.length) {
    console.log("String length don't match")
    return false;
  }

  // Create a hash map to hold the mapping
  var hashMap = new Map();

  // Iterate through 1st string, storing counts into the hash
  for (var i = 0; i < str1.length; ++i) {
    // If the hash map has the character, update value by 1
    if (hashMap.has(str1[i])) {
      hashMap.set(str1[i], hashMap.get(str1[i])+1);
    }
    // Otherwise, set the hash map
    else {
      hashMap.set(str1[i], 1);
    }
  }

  // Iterate through 2nd string, removing counts from the hash
  for (var i = 0; i < str2.length; ++i) {
    // If the character exists, reduce value by 1
    if (hashMap.has(str2[i])) {
      hashMap.set(str2[i], hashMap.get(str2[i])-1);
    }
    // If the character doesn't exist, 2nd string isn't a permutation
    else {
      console.log("Characters don't match")
      return false;
    }
  }
  console.log("Permutation matched")
  return true;
}

checkPermutation("string ", "gin rts");
