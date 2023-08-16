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

  //   function pop() {
  //
  //   }

  //   function contains(data) {
  //     //is the list sorted?
  //     //returns true if on the list otherwise return false
  //
  //   }

  //   function find(data) {
  //     //returns the index or null if not found
  //
  //   }

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
    // pop,
    // contains,
    // find,
    // toString,
  };
}

const list = linkedList();

[1, 2, 3, 4].forEach((v) => list.append(v));

list.prepend(5);

console.log(list);
console.log('Head: ' + JSON.stringify(list.getHead()));
console.log('Tail: ' + JSON.stringify(list.getTail()));
console.log('Size of List: ' + JSON.stringify(list.getSize()));
console.log('At index: ' + JSON.stringify(list.at(3)));
