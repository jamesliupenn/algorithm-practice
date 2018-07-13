// Defining a node
var Node = function() {
  this.value = null;
  this.left = null;
  this.right = null;
}

// Function to find the middle point
var findMidpoint = function(length) {
  if (length % 2 == 0) {
    return length / 2;
  }
  else {
    return length / 2 - 0.5;
  }
}

// createMinimalTree recursively construct a binary search tree with minimal height
// given a sorted array with unique integer elements.
var createMinimalTree = function(array) {
  // Base case, when the array is empty
  if (array.length < 1) {
    return null;
  }
  var midIndex = findMidpoint(array.length);
  var root = new Node;

  // Assign the root value
  root.value = array[midIndex];
  // Break the original array up into two
  var leftArr = array.slice(0, midIndex);
  var rightArr = array.slice(midIndex + 1, array.length);
  // Assign the left leaf and right leaf
  root.left = createMinimalTree(leftArr);
  root.right = createMinimalTree(rightArr);
  return root;
}

createMinimalTree([1, 2, 3, 4, 5, 6, 7]);
