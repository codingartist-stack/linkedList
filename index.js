function linkedNode(data, next = null) {
  return {
    data,
    next,
  };
}

function linkedList() {
  let [head, tail, size] = [null, null, 0];

  function append(data) {
    const next = linkedNode(data);

    if (head === null) {
      head = next;
      tail = next;
    } else {
      tail.next = next;
      tail = next;
    }
    size++;
  }

  const prepend = (data) => {
    const node = linkedNode(data);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      node.next = head;
      head = node;
    }
    size++;
  };

  const getHead = () => head;
  const getTail = () => tail;
  const getSize = () => size;

  const at = (index) => {
    let currentNode = head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  };

  const pop = () => {
    count = getSize();
    secondToLast = at(count - 1);
    secondToLast.next = null;
  };

  const contains = (value) => {
    let currentNode = head;
    let outcome = false;
    console.log('testing contains' + JSON.stringify(currentNode.next));

    for (let i = 0; i < size; i++) {
      console.log('testing loop' + JSON.stringify(currentNode));
      if (currentNode.data !== value) {
        currentNode = currentNode.next;
      }
      if (currentNode.data === value) {
        outcome = true;
        return outcome;
      }
    }
    return outcome;
  };

  // Ben's code using while
  //   const contains = (value) => {
  //     let node = head;

  //     while (node.next !== null) {
  //       if (node.data === value) return true;
  //       node = node.next;
  //     }
  //     return false;
  //   };

  //     //returns the index or null if not found
  const find = (value) => {
    let index = 1;
    let node = head;

    for (let i = 0; i < size; i++) {
      if (node.data === value) return index;
      node = node.next;
      console.log(index);
      index++;
    }

    // while (node.next !== null) {
    //   if (node.data === value) return index;
    //   node = node.next;
    //   console.log(index);
    //   index++;
    // }

    return null;
  };

  //turns your linked list into strings
  //format ( data ) -> ( data ) -> ( data ) -> null
  const toString = () => {};

  return {
    append,
    getHead,
    getTail,
    getSize,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

const list = linkedList();

[1, 2, 3, 4].forEach((v) => list.append(v));

list.prepend(5);

console.log(list);

console.log('Head: ' + JSON.stringify(list.getHead()));
console.log('index for 2? ' + JSON.stringify(list.find(2)));
console.log('index for 4? ' + JSON.stringify(list.find(4)));
console.log('index for 7? ' + JSON.stringify(list.find(7)));
