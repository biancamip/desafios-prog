var input = `6
Josh 56
Alfred 32
Joshua 34
Harley 61
Peggy 60
Jim 25`;
var lines = input.split("\n");

class MaxHeapGnomes {
  gnomes /* {name: string, age: number} */ = [];

  constructor() {
    this.gnomes = [];
  }

  pop() {
    return this.gnomes.pop();
  }

  insert(gnome) {
    let insertIdx = this._binarySearch(gnome.age);
    this.gnomes.splice(insertIdx, 0, gnome);
  }

  _binarySearch(val) {
    let low = 0;
    let high = this.gnomes.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let currVal = this.gnomes[mid].age;

      if (currVal === val) {
        return mid;
      } else if (currVal > val) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}

function main() {
  let numGnomes = +lines[0];

  let gnomesHeap = new MaxHeapGnomes();
  for (let i = 1; i <= numGnomes; i++) {
    let [name, age] = lines[i].split(" ");
    age = +age;

    gnomesHeap.insert({ name, age });
  }

  console.log(gnomesHeap);
  console.log(gnomesHeap.pop(), "should be harley");
}

main();
