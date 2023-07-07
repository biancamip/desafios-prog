const input = `6
10
15 5
23 4
21 2
16 4
19 5
18 2
2
15
47 12
39 4
5
23
43 9
4 1
17 2
13 5
54 17
6
7
14 4
21 2
26 7
18 4
30 13
10 2
0
`;
/*
    outputs:
    62 min.
    81 min.
*/
const lines = input.split("\n");

let orders = [];
let solutionMap = new Map();

function mochilaRec(orderNum, pizzas) {
  let cached = solutionMap.get(`${orderNum}-${pizzas}`);
  if (cached !== undefined) return cached;

  if (orderNum === orders.length) return 0;

  let solution = mochilaRec(orderNum + 1, pizzas);

  if (orders[orderNum].pizzas <= pizzas) {
    let tempSolution =
      orders[orderNum].time +
      mochilaRec(orderNum + 1, pizzas - orders[orderNum].pizzas);

    if (solution < tempSolution) {
      solution = tempSolution;
    }
  }

  solutionMap.set(`${orderNum}-${pizzas}`, solution);
  return solution;
}

function main() {
  let idx = 0;
  let numOrders = +lines[idx];

  while (numOrders !== 0) {
    orders = [];
    solutionMap = new Map();

    let maxPizzas = +lines[idx + 1];

    for (let i = idx + 2; i < numOrders + idx + 2; i++) {
      let [time, orderPizzas] = lines[i].split(" ").map((v) => +v);
      orders.push({ time, pizzas: orderPizzas });
    }

    let totalTime = mochilaRec(0, maxPizzas);
    console.log(`${totalTime} min.`);

    idx += numOrders + 2;
    numOrders = +lines[idx];
  }
}

main();
