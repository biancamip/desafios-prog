const input = `5 60
10 30
20 32
5 4
50 90
22 45
5 60
10 10
20 32
5 4
50 90
22 45
0 0`;
const lines = input.split("\n");

let availableTime = 0;
let numRides = 0;
let rides = [];
let solutionMap = new Map();

function mochilaRec(rideNum, duration) {
  let cached = solutionMap.get(`${rideNum}-${duration}`);
  if (cached !== undefined) return cached;

  if (rideNum === numRides) return 0;

  let solutionPoints = mochilaRec(rideNum + 1, duration);

  let rideRepetitions = 1;
  while (true) {
    let remainingDuration =
      duration - rideRepetitions * rides[rideNum].duration;

    if (remainingDuration < 0) break;

    let solutionPointsTemp =
      rideRepetitions * rides[rideNum].points +
      mochilaRec(rideNum + 1, remainingDuration);

    if (solutionPoints < solutionPointsTemp) {
      solutionPoints = solutionPointsTemp;
    }

    rideRepetitions++;
  }

  solutionMap.set(`${rideNum}-${duration}`, solutionPoints);
  return solutionPoints;
}

function main() {
  let idx = 0;
  [numRides, availableTime] = lines[idx].split(" ").map((v) => +v);
  let instance = 1;

  while (numRides !== 0) {
    console.log(`Instancia ${instance}`);

    rides = [];
    solutionMap = new Map();
    for (let i = idx + 1; i < idx + numRides + 1; i++) {
      let [duration, points] = lines[i].split(" ").map((v) => +v);
      rides.push({ duration: duration, points: points });
    }

    let solution = mochilaRec(0, availableTime);
    console.log(solution);
    console.log();

    // next instance
    instance++;
    idx += numRides + 1;
    [numRides, availableTime] = lines[idx].split(" ").map((v) => +v);
  }
}

main();
