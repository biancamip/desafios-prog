const input = `3 1
1 3
1 3 2
5 5
1 3
3 2
1 4
4 5
5 2
1 2 3`;
const lines = input.split("\n");

// todo minheappairs
class MinHeap {
  heapValues /*: Array<{cost: number, vertex: number}> */ = [];

  constructor() {
    this.heapValues = [];
  }

  pop() {
    return this.heapValues.pop();
  }

  insert(val) {
    let insertIdx = this._binarySearch(val.cost);
    this.heapValues.splice(insertIdx, 0, val);
  }

  _binarySearch(val) {
    let low = 0;
    let high = this.heapValues.length - 1;

    while (low <= high) {
      let midIdx = Math.floor((low + high) / 2);
      let currCost = this.heapValues[midIdx].cost;

      if (currCost === val) {
        return midIdx;
      } else if (currCost < val) {
        high = midIdx - 1;
      } else {
        low = midIdx + 1;
      }
    }

    return low;
  }
}

function main() {
  let idx = 0;

  while (idx < lines.length) {
    let [cities, routes] = lines[idx].split(" ").map((v) => +v);
    let [source, target, forbidden] = lines[idx + 1 + routes]
      .split(" ")
      .map((v) => +v - 1);

    let adjGraph /* Array<{ cost: number, vertex: number }> */ = Array(cities);
    let predecessors = Array(cities);

    for (let i = idx + 1; i < idx + 1 + routes; i++) {
      let [from, to] = lines[i].split(" ").map((v) => +v - 1);

      if (from !== forbidden && to !== forbidden) {
        let aux = adjGraph[from] === undefined ? [] : adjGraph[from];
        aux.push({ cost: 1, vertex: to });
        adjGraph[from] = aux;
      }
    }

    // let costs = Array(cities).fill(Number.MAX_SAFE_INTEGER);
    // let added = Array(cities).fill(0);
    // let heap /* { cost: number, vertex: number } */ = new MinHeap();

    // costs[source] = 0;
    // heap.insert({ cost: 0, vertex: source });

    idx += 1 + routes + 1;
    console.log("\n");
  }
}

main();
