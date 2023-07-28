const input = `1#
11#
000110#
0000011111
11111111111100#
1001111111
11111
11011#
0000011111111111111111#
00000111111
111111111110#
000001011111111111111101#
00000111111111
1111111100#
10011111111111111011#
1011111111
1111111010#
11011111111111111001#
1111111111
1111111000#
10001111
1111111
110111#`;
const lines = input.split("\n");

function main() {
  let referenceBinaryNum = "11111111111111111"; // 131071
  let referenceInt = parseInt(referenceBinaryNum, 2);

  let numbers = lines.join("");
  let binaryNums = numbers.split("#");

  for (let i = 0; i < binaryNums.length; i++) {
    let binary = binaryNums[i];
    if (binary === "") break;

    let int = parseInt(binary, 2);
    let isDivisible = int % referenceInt === 0;
    console.log(isDivisible ? "YES" : "NO");
  }
}

main();
