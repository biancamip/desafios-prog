const input = `7 2
administer 100000
spending 200000
manage 50000
responsibility 25000
expertise 100
skill 50
money 75000
the incumbent will administer the
spending of kindergarden milk money
and exercise responsibility for making
change he or she will share
responsibility for the task of managing
the money with the assistant
whose skill and expertise shall ensure
the successful spending exercise
.
this individual must have the skill to
perform a heart transplant and
expertise in rocket science
.`;
const lines = input.split("\n");

function main() {
  let firstLine = lines.shift().split(" ");
  let numWords = firstLine[0];
  let jobDescriptions = firstLine[1];

  let wordsMap = new Map();

  for (let i = 0; i < numWords; i++) {
    const lineWords = lines[i].split(" ");
    const word = lineWords[0];
    const value = lineWords[1];

    wordsMap.set(word, value);
  }

  let currSalary = 0;
  for (let i = numWords; i < lines.length; i++) {
    let line = lines[i];

    if (lines[i] === ".") {
      console.log(currSalary);
      currSalary = 0;
    }

    const lineWords = lines[i].split(" ");
    for (word of lineWords) {
      let value = wordsMap.get(word);
      currSalary += value === undefined ? 0 : +value;
    }
  }
}

main();
