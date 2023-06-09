const input = `6
1 1
1 2
1 3
2 1
2 2
2 3
6
1 1
1 2
1 3
2 3
2 2
2 1
2
1 1
2 2
4
1 2
1 1
2 1
2 2
7
1 2
1 5
1 1
1 3
2 5
1 4
2 4`;
/* expected:
queue
not sure
impossible
stack
priority queue
*/
var lines = input.split("\n");

class MaxHeap {
  heapValues = [];

  constructor() {
    this.heapValues = [];
  }

  pop() {
    return this.heapValues.pop();
  }

  insert(val) {
    let insertIdx = this._binarySearch(val);
    this.heapValues.splice(insertIdx, 0, val);
  }

  _binarySearch(val) {
    let low = 0;
    let high = this.heapValues.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let curr = this.heapValues[mid];

      if (curr === val) {
        return mid;
      } else if (curr > val) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}

function main() {
  let idx = 0;

  let outputs = [];

  while (idx < lines.length) {
    let numOperations = +lines[idx];

    let stack = [];
    let queue = [];
    let heap = new MaxHeap();

    let possibilities = new Set();
    possibilities.add("stack");
    possibilities.add("queue");
    possibilities.add("priority queue");

    for (let i = 0; i < numOperations; i++) {
      idx++;

      let line = lines[idx].split(" ");
      let operation = line[0];
      let value = +line[1];

      switch (operation) {
        case "1":
          stack.push(value);
          queue.push(value);
          heap.insert(value);
          break;

        case "2":
          let stackVal = stack.pop();
          let queueVal = queue.shift();
          let heapVal = heap.pop();

          if (stackVal === undefined || stackVal !== value)
            possibilities.delete("stack");
          if (queueVal === undefined || queueVal !== value)
            possibilities.delete("queue");
          if (heapVal === undefined || heapVal !== value)
            possibilities.delete("priority queue");
          break;

        default:
          console.log("unknown operation", operation);
          break;
      }
    }

    let output;
    switch (possibilities.size) {
      case 0:
        output = "impossible";
        break;
      case 1:
        let iter = possibilities.values();
        output = iter.next().value;
        break;
      default:
        output = "not sure";
        break;
    }
    outputs.push(output);

    idx++;
  }

  // # of atrocities: 2 and counting
  outputs.pop();
  outputs.map((value) => console.log(value));
}

main();
