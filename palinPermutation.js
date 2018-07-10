// palinPermutation checks a string and figures out if letters can be rearranged to become a palindrome.
// i.e. "cattaco" can be rearranged to "tacocat" to form a palindrome, hence returning true.
// "reverse" cannot be rearranged to a palindrome, hence returning false.

function palinPermutation(str) {
  // Create a hashmap and store the string in it
  let hashMap = new Map();

  for (var i = 0; i < str.length; ++i) {
    if (hashMap.has(str[i])) {
      if (hashMap.get(str[i]) == 0) {
        hashMap.set(str[i], 1);
      }
      else {
        hashMap.set(str[i], hashMap.get(str[i])-1);
      }
    }  
    else {
      hashMap.set(str[i], 1);
    }
  }
  // sum of all map value == 0 or 1, palindrome is true
  // else, palindrome is false
  var sum = 0;
  for (let item of hashMap) {
    sum += item[1];
  }
  return (sum <= 1 ? true : false);
}

palinPermutation("aabbcc");
