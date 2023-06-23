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

class MinHeap {
  heapValues /*: Array<{cost: number, vertex: number}> */ = [];

  constructor() {
    this.heapValues = [];
  }

  empty() {
    return this.heapValues.length === 0;
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
    if (lines[idx] === undefined) break;
    let [cities, routes] = lines[idx].split(" ").map((v) => +v);

    if (lines[idx + 1 + routes] === undefined) break;
    let [source, target, forbidden] = lines[idx + 1 + routes]
      .split(" ")
      .map((v) => +v - 1);

    let adjGraph /* Array<{ cost: number, vertex: number }> */ = Array(
      cities
    ).fill([]);

    for (let i = idx + 1; i < idx + 1 + routes; i++) {
      let [from, to] = lines[i].split(" ").map((v) => +v - 1);

      let aux = [...adjGraph[from]];
      aux.push({ cost: 1, vertex: to });
      adjGraph[from] = aux;
    }

    let costs = Array(cities).fill(Number.MAX_SAFE_INTEGER);
    let added = Array(cities).fill(false);
    let predecessors = Array(cities).fill(0);
    predecessors[source] = source;
    costs[source] = 0;

    let heap /* { cost: number, vertex: number } */ = new MinHeap();
    heap.insert({ cost: 0, vertex: source });
    while (!heap.empty()) {
      let heapTop = heap.pop();
      let vertex = heapTop.vertex;
      added[vertex] = true;

      for (let i = 0; i < adjGraph[vertex].length; i++) {
        let adjacentVertex = adjGraph[vertex][i].vertex;
        if (
          adjacentVertex !== forbidden &&
          !added[adjacentVertex] &&
          adjGraph[vertex][i].cost + costs[vertex] < costs[adjacentVertex]
        ) {
          costs[adjacentVertex] = adjGraph[vertex][i].cost + costs[vertex];
          heap.insert({ cost: costs[adjacentVertex], vertex: adjacentVertex });
          predecessors[adjacentVertex] = vertex;
        }
      }
    }

    console.log(costs[target]);
    idx += 1 + routes + 1;
  }
}

main();
