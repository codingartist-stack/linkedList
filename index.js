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

  //   const contains = (value) => {
  //     let node = head;

  //     while (node.next !== null) {
  //       if (node.data === value) return true;
  //       node = node.next;
  //     }
  //     return false;
  //   };

  //     //returns the index or null if not found
  const find = (value) => {};

  //   function toString() {
  //     //turns your linked list into strings
  //     //format ( data ) -> ( data ) -> ( data ) -> null
  //
  //   }

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
  };
}

const list = linkedList();

[1, 2, 3, 4].forEach((v) => list.append(v));

list.prepend(5);

console.log(list);

console.log('Head: ' + JSON.stringify(list.getHead()));
console.log('Does it have 4? ' + JSON.stringify(list.contains(4)));
