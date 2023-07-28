const input = `1
8
2250
0`;
const lines = input.split("\n");

function main() {
  let idx = 0;
  let numColors = lines[idx];

  while (numColors > 0) {
    let possibilities = Math.pow(numColors, 4);
    possibilities = Math.max(Math.floor(possibilities / 12), 1);

    if (possibilities > 1000007) {
      possibilities = possibilities % 1000007;
    }

    console.log(numColors, possibilities);

    idx++;
    numColors = lines[idx];
  }
}

main();
