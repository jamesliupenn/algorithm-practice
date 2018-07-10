//Fxn to check if str1 and str2 are rotations of each other
function stringRotation(str1, str2) {
  var str1str1 = str1.concat(str1);
  //Returns the result of isSubstring
  return isSubstring(str1str1, str2);
}

//Fxn to check if str2 is a substring of str1
function isSubstring(str1, str2) {
  //Iterate through str1
  for (var i = 0; i < str1.length; ++i) {
    //Grep the substring using str2's length
    var substring = str1.substr(i, str2.length);
    //Check if it matches str2, if so, str2 is a substring of str1
    if (substring == str2) {
      return true;
    }
    //Stops once the substring is shorter than str2 to save us some 
    //time complexity
    else if (substring.length < str2.length) {
      return false;
    }
  }
  return false;
}
stringRotation("ercoolerwat", "watercooler");
