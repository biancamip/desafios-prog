var input = `Jones Pedro Carlos Lucas
Juca Valdineia Jovander
nao`;
var lines = input.split("\n");

function main() {
  let firstLine = lines[0].split(" ");
  let secondLine = lines[1].split(" ");
  let thirdLine = lines[2];

  let hasSeparator = thirdLine !== "nao";

  let result;
  if (!hasSeparator) {
    result = firstLine.concat(secondLine).join(" ");
  } else {
    let separatorIndex = firstLine.firstIndex((l) => thirdLine === l);
    let firstHalf = firstLine.slice(0, separatorIndex);
    let secondHalf = firstLine.slice(separatorIndex);
    result = firstHalf.concat(secondLine).concat(secondHalf).join(" ");
  }

  console.log(result);
}

main();
