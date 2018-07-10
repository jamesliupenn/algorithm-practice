function stringCompress(str) {
  // Create several empty string, one for the final result,
  // one as previous and one for current placeholders for comparison
  // Also, create a count variable to keep count
  var finalstr = "";
  var previous = "";
  var current = "";
  var count = 1;

  // Loop thru the original string and only once, keeping time
  // complexity to O(n)
  for (var i = 1; i < str.length; ++i) {
    // Compare two elements at a time
    previous = str[i-1];
    current = str[i];
    // If matched, increase the count by 1
    if (current == previous) {
      ++count;
    }
    // If not matched, concatenate the final string & reset the count
    else {
      finalstr = finalstr.concat(previous).concat(count);
      count = 1; //reset count
    }
  }
  // At the end of the string, concat the last element
  finalstr = finalstr.concat(previous).concat(count);  

  return finalstr;
}

stringCompress("aabcccccaaa"); // expect a2b1c5a3
