function findRepeatedDnaSeq(str) {
  let result = [];
  let dnaMap = new Map();
  let count = 0;

// Special case when the DNA string is too short
  if (str.length < 11) {
    console.log("Input DNA is too short");
    return result;
  }

// Iterate through the string
  for (let i = 0; i <= str.length; i++) {
    // Taking a slice of 10 characters each time and keeping the count
    let strSlice = str.slice(i, i+10);
    let count = dnaMap.get(strSlice);

    // We only check for slices that contain 10 characters
    if (str.length - i >= 10) {
      // Checks if the slice exists in the Map & if it is repeating, add it to the result array. Here we only need to add to the result array when we see a sequence repeating for the first time.
      if (dnaMap.has(strSlice) && count == 1){
        result.push(strSlice);
        dnaMap.set(strSlice, count+1);
      }
      // If the Map contains no slice of this sequence, set it to the Map
      else if (!dnaMap.has(strSlice)) {
        dnaMap.set(strSlice, 1);
      }
    }
  }
  return result;
}

findRepeatedDnaSeq("AAAAACCCCCAAAAACCCCC");
