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
      } else if (curr < val) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}

function main() {
  let heap = new MinHeap();
  heap.insert(10);
  heap.insert(2);
  heap.insert(8);
  console.log(heap.pop(), "should be 2");
}

main();
