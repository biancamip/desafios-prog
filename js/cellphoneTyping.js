var input = `4
hello
hell
heaven
goodbye
3
hi
he
h
7
structure
structures
ride
riders
stress
solstice
ridiculous`;
var lines = input.split("\n");

class Trie {
  root = new Map /*<string, any>*/();

  constructor() {
    this.root = new Map();
  }

  insert(word) {
    let outerMap = this.root;

    for (let idx = 0; idx < word.length; idx++) {
      let char = word[idx];

      let charMap = outerMap.get(char);
      if (charMap === undefined) {
        charMap = new Map();
        outerMap.set(char, charMap);
      }

      outerMap = charMap;
    }

    outerMap.set("*", true);
  }

  search(word) {
    let outerMap = this.root;

    for (let idx = 0; idx < word.length; idx++) {
      let char = word[idx];
      let charMap = outerMap.get(char);

      if (charMap === undefined) return false;

      outerMap = charMap;
    }

    let result = outerMap.get("*");
    return result === undefined ? false : result;
  }

  startsWith(prefix) {
    let outerMap = this.root;

    for (let idx = 0; idx < prefix.length; idx++) {
      let char = prefix[idx];
      let charMap = outerMap.get(char);

      if (charMap === undefined) return false;

      outerMap = charMap;
    }

    return true;
  }
}

function main() {
  let idx = 0;

  while (idx < lines.length) {
    let currTrie = new Trie();
    let dictSize = +lines[idx];
    let words = [];

    for (let i = idx + 1; i < idx + 1 + dictSize; i++) {
      let word = lines[i];
      words.push(word);
      currTrie.insert(word);
    }

    let totalStrokes = 0;
    for (let word of words) {
      let wordStrokes = 1; // first char is always counted

      let wordChars = word.split("");
      let currRoot = currTrie.root;
      for (let i = 0; i < wordChars.length; i++) {
        let char = wordChars[i];

        let nextRoot = currRoot.get(char);

        if (nextRoot.size > 1 && i < wordChars.length - 1) {
          wordStrokes++;
        }

        currRoot = nextRoot;
      }

      totalStrokes += wordStrokes;
    }

    let result = totalStrokes / words.length;
    // yes, this is an atrocity
    if (!Number.isNaN(result)) {
      console.log(result.toFixed(2));
    }

    idx += dictSize + 1;
  }
}

main();
