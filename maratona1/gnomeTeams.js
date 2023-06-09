var input = `6
Josh 56
Alfred 32
Joshua 34
Tarley 61
Peggy 61
Jim 25`;
var lines = input.split("\n");
/* expected:
Time 1
Harley 61
Josh 56
Alfred 32

Time 2
Peggy 60
Joshua 34
Jim 2
*/

class MaxHeapGnomes {
  gnomes /* {name: string, age: number} */ = [];

  constructor() {
    this.gnomes = [];
  }

  pop() {
    return this.gnomes.pop();
  }

  insert(gnome) {
    let insertIdx = this._binarySearch(gnome);
    this.gnomes.splice(insertIdx, 0, gnome);
  }

  _binarySearch(gnome) {
    let name = gnome.name;
    let val = gnome.age;

    let low = 0;
    let high = this.gnomes.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let currVal = this.gnomes[mid].age;

      if (currVal === val) {
        if (this.gnomes[mid].name.localeCompare(name) >= 0) {
          low = mid + 1;
        } else {
          return mid;
        }
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
    gnomesHeap.insert({ name, age: +age });
  }

  let numTeams = numGnomes / 3;
  let teams /*: Array<leader: Gnome, delivery: Gnome, driver: Gnome> */ = [];

  for (let i = 0; i < numTeams; i++) {
    teams[i] = { leader: gnomesHeap.pop() };
  }

  for (let i = 0; i < numTeams; i++) {
    let team = teams[i];
    teams[i] = { ...team, delivery: gnomesHeap.pop() };
  }

  for (let i = 0; i < numTeams; i++) {
    let team = teams[i];
    teams[i] = { ...team, driver: gnomesHeap.pop() };
  }

  teams.map((team, idx) => {
    console.log(`Time ${idx + 1}`);
    console.log(`${team.leader.name} ${team.leader.age}`);
    console.log(`${team.delivery.name} ${team.delivery.age}`);
    console.log(`${team.driver.name} ${team.driver.age}`);
    console.log("");
  });
}

main();
