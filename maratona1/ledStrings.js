const input = `4 3
1 2
1 3
2 3
4 1
2 4`;
/*
6 4
1 2
3 4
5 6
2 3
*/
const lines = input.split("\n");

let visited = new Set();

function dfs(children, adjacencia) {
  for (let child of children) {
    if (!visited.has(child)) {
      visited.add(child);
      dfs(adjacencia[child], adjacencia);
    }
  }
}

function main() {
  let [vertices, arestas] = lines[0].split(" ").map((value) => +value);

  let adjacencia = [];

  for (let i = 1; i < lines.length; i++) {
    let [from, to] = lines[i].split(" ");
    from = +from - 1;
    to = +to - 1;

    if (adjacencia[from] === undefined) adjacencia[from] = [];
    if (adjacencia[to] === undefined) adjacencia[to] = [];
    adjacencia[from].push(to);
    adjacencia[to].push(from);
  }

  dfs(adjacencia[0], adjacencia);

  console.log(visited.size < vertices ? "INCOMPLETO" : "COMPLETO");
}

main();
