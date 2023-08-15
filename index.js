function linkedList(theList) {
  const head = theList[0];
  const tail = theList[theList.length - 1];
  const size = theList.length;

  function append(value) {
    theList.push(value);
    return theList;
  }

  //   function prepend(value) {
  //     theList.unshift(value);
  //     return theList;
  //   }

  //   function at(index) {
  //     return theList[index];
  //   }

  //   function pop() {
  //     theList.pop();
  //     return theList;
  //   }

  //   function contains(value) {
  //     //is the list sorted?
  //     //returns true if on the list otherwise return false
  //     return theList.includes(value);
  //   }

  //   function find(value) {
  //     //returns the index or null if not found
  //     return indexOf(value);
  //   }

  //   function toString() {
  //     //turns your linked list into strings
  //     //format ( value ) -> ( value ) -> ( value ) -> null
  //     let stringList = '';

  //     for (let i = 0; i < theList.length; i++) {
  //       stringList + '( ' + theList[i] + ' ) -> ';
  //     }

  //     return stringList + 'null';
  //   }

  return {
    head,
    tail,
    size,
    append,
    // prepend,
    // at,
    // pop,
    // contains,
    // find,
    // toString,
  };
}

function linkedNode(value, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
