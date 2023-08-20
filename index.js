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

    for (let i = 0; i < size; i++) {
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

  const find = (value) => {
    let index = 1;
    let node = head;

    while (node !== null) {
      if (node.data === value) return index;
      node = node.next;

      index++;
    }

    return null;
  };

  const toString = () => {
    let string = '';
    let node = head;

    while (node !== null) {
      string += `( ${node.data} ) -> `;
      node = node.next;
    }

    string += 'null';

    return string;
  };

  const insertAt = (value, index) => {
    value = linkedNode(value);

    let currentNode = head;
    let previousNode;

    if (head == null) {
      append(value);
    } else {
      for (let i = 1; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = value;
      value.next = currentNode;
    }

    return head;
  };

  const removeAt = (index) => {
    let currentNode = head;
    let previousNode;

    if (index > size) {
      return console.log(
        `index(${index}) is greater than list length(list length = ${size})`
      );
    }
    if (index == 1) {
      head = head.next;
    } else {
      for (let i = 1; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    return head;
  };

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
    insertAt,
    removeAt,
  };
}

const list = linkedList();

[1, 2, 3, 4].forEach((v) => list.append(v));

console.log(list);

console.log(JSON.stringify(list.getHead()));

console.log(JSON.stringify(list.removeAt(1)));
