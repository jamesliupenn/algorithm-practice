// removeDups checks a linked list and removes if there are any duplicates in value.
// The remainder of the linked list will contain no duplicates.

function removeDups(list) {
  var myMap = new Map();
  var previous = list.head;
  var current = list.head.next;

  // We only check if there are more than 2 nodes in the list
  while (current) {
    if (myMap.has(current.value)) {
      // If there's a duplicate, hook the previous node to the next node, removing current
      previous.next = current.next;
    }
    else {
      myMap.set(current.value);
      previous = current;
    }
    current = current.next;
  }
}
