function linkedList(theList) {
  const head = theList[0];
  const tail = theList[theList.length - 1];
  const size = theList.length;

  return {
    head,
    tail,
    size,
    append(value) {
      theList.push(value);
    },
    prepend(value) {
      theList.unshift(value);
    },
    at(index) {
      return theList[index];
    },
    pop() {
      theList.pop();
    },
  };
}

function linkedNode(value, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
