// URLify trims and replaces corresponding whitespaces in a given string with URL-specific marks
// i.e. " Master of Puppets   " will be URLified to "Master%20of%20Puppets"

function URLify(str) {
  // Use of regex to search for all whitespace after trimming
  var newString = str.trim().replace(/\s/g,"%20")
  return newString;
}
// Testing function
URLify("    Mr John Smith   ");
