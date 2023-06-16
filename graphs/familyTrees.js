const input = `9 6
Jose_1 marido Maria
Josias marido Liboria
Liboria mae Guapo
Sandra filho Maria
Paulo filho Jose_2
Sandra mae Ivanir`;
const lines = input.split("\n");

let relations = [];

function main() {
  lines.shift();

  relations = [];

  for (const line of lines) {
    let [firstPerson, relation, secondPerson] = line.split(" ");

    let firstIdx = relations.findIndex((r) => r.name === firstPerson);
    let firstRelatives =
      firstIdx === -1 ? [] : [...relations[firstIdx].relatives];
    firstRelatives.push(secondPerson);

    let firstObject = {
      name: firstPerson,
      visited: false,
      relatives: firstRelatives,
    };
    if (firstIdx === -1) relations.push(firstObject);
    else relations[firstIdx] = firstObject;

    let secondIdx = relations.findIndex((r) => r.name === secondPerson);
    let secondRelatives =
      secondIdx === -1 ? [] : [...relations[secondIdx].relatives];
    secondRelatives.push(firstPerson);

    let secondObject = {
      name: secondPerson,
      visited: false,
      relatives: secondRelatives,
    };
    if (secondIdx === -1) relations.push(secondObject);
    else relations[secondIdx] = secondObject;
  }

  let families = 0;

  for (let i = 0; i < relations.length; i++) {
    if (!relations[i].visited) {
      dfs(relations[i].name);
      families++;
    }
  }

  console.log(families);
}

function dfs(personName /*: string */) {
  let idx = relations.findIndex((rel) => rel.name === personName);
  if (relations[idx].visited) return;

  relations[idx] = { ...relations[idx], visited: true };
  for (const relative of relations[idx].relatives) dfs(relative);
}

main();
