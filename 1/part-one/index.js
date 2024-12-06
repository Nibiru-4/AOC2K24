const fs = require("fs");

// Read the input file
const input = fs.readFileSync("sample.txt", "utf-8");

// Parse the two lists
const [list1, list2] = input
  .trim()
  .split("\n")
  .map((line) => line.split(/\s+/).map(Number))
  .reduce(
    ([left, right], [l, r]) => {
      left.push(l);
      right.push(r);
      return [left, right];
    },
    [[], []]
  );

// Sort both lists
list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

// Calculate total distance
const totalDistance = list1.reduce((sum, leftValue, index) => {
  return sum + Math.abs(leftValue - list2[index]);
}, 0);

console.log("Total Distance:", totalDistance);
