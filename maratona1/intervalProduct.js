const input = `4 6
-2 6 0 -1
C 1 10
P 1 4
C 3 7
P 2 2
C 4 -5
P 1 4
5 9
1 5 -2 4 3
P 1 2
P 1 5
C 4 -5
P 1 5
P 4 5
C 3 0
P 1 5
C 4 -5
C 4 -5`;
const lines = input.split("\n");
// expected:
// 0+-
// +-+-0

function main() {
  let idx = 0;

  while (idx < lines.length) {
    let firstLine = lines[idx].split(" ");
    let n = +firstLine[0];
    let rounds = +firstLine[1];

    idx++;
    let numbers = lines[idx].split(" ");
    //.map((value) => +value);

    idx++;
    let output = "";

    for (let i = 0; i < rounds; i++) {
      let line = lines[idx].split(" ");
      let command = line[0];
      let first = +line[1];
      let second = +line[2];

      switch (command) {
        case "C":
          numbers[first - 1] = second;
          break;
        case "P":
          let prod = 1;
          for (let i = first; i < second; i++) {
            prod = prod * +numbers[i - 1];
          }
          output = `${output}${prod === 0 ? "0" : prod < 0 ? "-" : "+"}`;
          break;

        default:
          console.log("unknown command");
      }
      idx++;
    }

    console.log(output);
  }
}

main();
