// Definition of initializing a Stack
function Stack() {
  this._size = 0;
  this._storage = {};
}

// Push to a Stack appends to the Stack
Stack.prototype.push = function(data) {
  var size = ++this._size; // Increases the size
  this._storage[size] = data; // Assigns the data
};

// Pop a Stack removes the last added element
Stack.prototype.pop = function() {
  var size = this._size;
  var deletedData;
  // Check if the Stack is empty or not
  if (size) {
    // Get the last added element
    deletedData = this._storage[size];
    delete this._storage[size]; // Deletion
    this._size--; // Reduce size by 1

    return deletedData;
  }
};

/**
 * Stack of Stacks 
 */

// Stack to store stacks
function setOfStacks() {
  this._size = 0;
  this._storage = {};
}

// Push appends a stack into the stack of stacks
setOfStacks.prototype.push = function(stack) {
  var size = ++this._size;
  this._storage[size] = stack;
};

// Pop removes the last stack added into the stack of stacks
setOfStacks.prototype.pop = function() {
  if (this._size > 0) {
    delete this._storage[this._size];
    this._size--;
  }
};

// Pop a specific stack identified by the index
setOfStacks.prototype.popAt = function(index) {
  if (this._size > 0 && index <= this._size) {
    delete this._storage[index];
    this._size--;
  }
};

// Create the stacks
var stack1 = new Stack;
var stack2 = new Stack;
stack1.push(2);
stack1.push(3);
stack2.push(4);
stack2.push(5);

// Create the stack of stacks
var mySet = new setOfStacks;
mySet.push(stack1);
mySet.push(stack2);
