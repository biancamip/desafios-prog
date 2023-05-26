const input = `6
E C A F
E C A F
E C A F
E C A F
E C A F
E C A F`;
const lines = input.split("\n");

function main() {
  let stack = [];

  let result = 0;

  for (let i = 1; i < lines.length; i++) {
    let word = lines[i].split(" ").join("");
    let wordReversed = word.split("").reverse().join("");

    if (stack.length === 0) stack.push("FACE");

    let top = stack[stack.length - 1];
    if (top === wordReversed) {
      stack.pop();
      result++;
    } else {
      stack.push(word);
    }
  }

  console.log(result);
}

main();
