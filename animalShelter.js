// Animal Shelter implements a queue that uses the FIFO (First-in First-out) approach.
// The oldest animal in the queue will be adopted first upon dequeue if no specific type is indicated.
// If cat or dog was specified, dequeue the oldest animal of that type.

var AnimalQ = function() {
  this._oldestIndex = 1;
  this._newestIndex = 1;
  this._storage = {};
}

// Returns the size of the storage
AnimalQ.prototype.size = function() {
  var size = 0;
  for (var i = 1; i < this._newestIndex; i++) {
    if (this._storage[i] != undefined)
      size++;
  }
  return size;
};

// Enqueue a new animal into the shelter
AnimalQ.prototype.enqueue = function(data) {
  this._storage[this._newestIndex] = data;
  this._newestIndex++;
};

// Dequeue the oldest animal regardless of animal breed
AnimalQ.prototype.dequeueAny = function() {
  if (this._newestIndex != this._oldestIndex) {
    delete this._storage[this._oldestIndex];
    this._oldestIndex++;
  }
};

// Dequeue the oldest dog in the queue
AnimalQ.prototype.dequeueDog = function() {
  if (this._newestIndex != this._oldestIndex) {
    var oldestDogIndex = 1;
    while (this._storage[oldestDogIndex] != "dog") {
      oldestDogIndex++;
    }
    console.log("index: ", oldestDogIndex);
    delete this._storage[oldestDogIndex];
  }
};

// Dequeue the oldest cat in the queue
AnimalQ.prototype.dequeueCat = function() {
  if (this._newestIndex != this._oldestIndex) {
    var oldestCatIndex = 1;
    while (this._storage[oldestCatIndex] != "cat") {
      oldestCatIndex++;
    }
    delete this._storage[oldestCatIndex];
  }
};
