const input = `6
20
18
35
6
80
15
21
4
40
30
20
10
38`;
const lines = input.split("\n");

// let revenues = [];
// let perDayCost;
// let maxProfitByDay = [];

// function rec(start, profit) {
//   let dayProfit = revenues[start] - perDayCost;
// }

function main() {
  let idx = 0;
  let results = [];

  while (idx < lines.length) {
    let numDays = +lines[idx];
    let perDayCost = +lines[idx + 1];
    let maxProfitByDay = [];

    let maxProfit = 0;
    for (let i = 0; i < numDays; i++) {
      let revenue = lines[i + idx + 2];

      let dayProfit = revenue - perDayCost;
      maxProfitByDay[i] = Math.max(
        dayProfit,
        dayProfit +
          (maxProfitByDay[i - 1] === undefined ? 0 : maxProfitByDay[i - 1])
      );

      if (maxProfitByDay[i] > maxProfit) {
        maxProfit = maxProfitByDay[i];
      }
    }

    results.push(maxProfit);
    idx += numDays + 2;
  }

  results.pop();
  // for some reason this makes it work on beecrowd
  results.map((r) => console.log(r));
}

main();
