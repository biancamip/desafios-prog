var input = `


`;
var lines = input.split("\n");

class UnionFind {
  MAX = 100;

  unions = [];
  unionsSize = [];

  constructor() {
    for (let i = 0; i < MAX; i++) {
      this.unions[i] = i; // inicialmente o elemento está no conjunto que só o contem
      this.unionsSize[i] = 1; // inicialmente o conjunto somente tem um elemento
    }
  }

  search(el) {
    if (el !== this.unions[el]) {
      this.unions[el] = this.search(el);
    }

    return this.unions[el];
  }

  join(a, b) {
    let unionA = this.search(a);
    let unionB = this.search(b);

    if (unionA !== unionB) {
      if (this.unionsSize[unionA] >= this.unionsSize[unionB]) {
        this.unions[unionB] = unionA;
        this.unionsSize[unionA] += this.unionsSize[unionB];
      } else {
        this.unions[unionA] = unionB;
        this.unionsSize[unionB] += this.unionsSize[unionA];
      }
    }
  }
}
