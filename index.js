function linkedList(theList) {
  const head = theList[0];
  const tail = theList[theList.length - 1];
  const size = theList.length;

  function append(value) {
    theList.push(value);
  }

  function prepend(value) {
    theList.unshift(value);
  }

  function at(index) {
    return theList[index];
  }

  function pop() {
    theList.pop();
  }

  function contains(value) {
    //is the list sorted?
    //returns true if on the list otherwise return false
    if (theList.find(value) == undefined) {
      return false;
    } else {
      return true;
    }
  }

  function find(value) {
    //returns the index or null if not found
  }

  function toString() {
    //turns your linked list into strings
    //format ( value ) -> ( value ) -> ( value ) -> null
  }

  return {
    head,
    tail,
    size,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
  };
}

function linkedNode(value, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
