var input = `3 5
C 1 2
F 1 2
C 1 2
F 1 3
C 1 3
`;
var lines = input.split("\n");

class UnionFind {
  unions = [];
  unionsSize = [];

  constructor(n) {
    for (let i = 1; i <= n; i++) {
      this.unions[i] = i;
      this.unionsSize[i] = 1;
    }
  }

  search(el) {
    if (el !== this.unions[el]) {
      this.unions[el] = this.search(this.unions[el]);
    }

    return this.unions[el];
  }

  join(a, b) {
    let unionA = this.search(+a);
    let unionB = this.search(+b);

    if (unionA === unionB) return;

    if (this.unionsSize[unionA] >= this.unionsSize[unionB]) {
      this.unions[unionB] = unionA;
      this.unionsSize[unionA] += this.unionsSize[unionB];
    } else {
      this.unions[unionA] = unionB;
      this.unionsSize[unionB] += this.unionsSize[unionA];
    }
  }
}

function main() {
  let firstLine = lines.shift().split(" ");
  let banks = firstLine[0];
  let operations = firstLine[1];

  let unionFind = new UnionFind(banks);

  for (let i = 0; i < operations; i++) {
    let line = lines[i].split(" ");
    let operation = line[0];
    let bankA = +line[1];
    let bankB = +line[2];

    if (operation === "F") {
      unionFind.join(bankA, bankB);
    } else if (operation === "C") {
      let codeA = unionFind.search(bankA);
      let codeB = unionFind.search(bankB);

      console.log(codeA === codeB ? "S" : "N");
    }
  }
}

main();
