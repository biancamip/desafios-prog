const input = `2
4 3
galaxy
cara tossiu
kagayaku
canalha do
atsuki
alto que
yuushi
util
o galaxy
o galaxy
o kagayaku atsuki yuushi
3 1
bashulhan
sobre a mesa
hu
esta
hasefer
o livro
hasefer hu bashulhan`;
const lines = input.split("\n");
// expected:
// o cara tossiu
// o cara tossiu
// o canalha do alto que util

// o livro esta sobre a mesa

function main() {
  let instances = +lines[0];

  let idx = 1;

  let outputs = [];

  while (idx < lines.length) {
    let instanceDict = new Map();
    let [words, lyricLines] = lines[idx].split(" ").map((val) => +val);

    for (let i = 1; i <= words * 2; i += 2) {
      let japanese = lines[idx + i];
      let portuguese = lines[idx + i + 1];
      instanceDict.set(japanese, portuguese);
    }

    idx = idx + words * 2 + 1;
    for (let i = 0; i < lyricLines; i++) {
      let lyric = lines[idx + i];
      let translatedLyric = lyric
        .split(" ")
        .map((word) => {
          let translated = instanceDict.get(word);
          return translated === undefined ? word : translated;
        })
        .join(" ");
      outputs.push(translatedLyric);
    }

    outputs.push("");
    idx = idx + lyricLines;
  }

  outputs.pop();
  outputs.map((value) => console.log(value));
}

main();
