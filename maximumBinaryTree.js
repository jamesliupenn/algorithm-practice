// This function builds a binary tree with the maximum number of an unique integer array as root
// and divides the tree from the maximum number into subtrees

// Constructor for a Node object
let Node = function() {
  this.value = null;
  this.left = null;
  this.right = null;
}

// An utility function to find the maximum number in an array
let findMax = function(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// The main piece here to build the binary tree
let maximumBinaryTree = function(array) {
  // Base case - when array is empty
  if (array.length == 0) {
    return;
  }
  let max = findMax(array);
  let indexOfMax = array.indexOf(max);
  // Here we slice the array up into two piece - left and right
  let leftArr = array.slice(0, indexOfMax);
  let rightArr = array.slice(indexOfMax + 1, array.length);
  // Creating the node
  let node = new Node;
  // Now we initialize the node with value, and set the left and right to recursively call the function using the truncated arrays
  node.value = max;
  node.left = maximumBinaryTree(leftArr);
  node.right = maximumBinaryTree(rightArr);
  return node;
}


let arr = [3,2,1,6,0,5];
maximumBinaryTree(arr);
