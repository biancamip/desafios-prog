const input = `8 8
Pedro marido Maria
Pedro pai Josias
Josias irmao Mangojata
Maria mae Mangojata
Samuel filho Maria
Paulo filho Marcos
Samuel tio Ivane
Mangojata mae Ivane`;
const lines = input.split("\n");

function main() {
  let [numPeople, _] = lines.shift().split(" ");

  // init people graph
  let relations = new Map();

  for (const line of lines) {
    let [firstPerson, relation, secondPerson] = line.split(" ");
    let firstPersonRelations =
      relations.get(firstPerson) === undefined
        ? []
        : relations.get(firstPerson);
    firstPersonRelations.push(secondPerson);
    relations.set(firstPerson, firstPersonRelations);

    let secondPersonRelations =
      relations.get(secondPerson) === undefined
        ? []
        : relations.get(secondPerson);
    secondPersonRelations.push(firstPerson);
    relations.set(secondPerson, secondPersonRelations);
  }

  let families = 0;
  for (const [key, value] of relations) {
    console.log(key, value);
  }
}

main();
