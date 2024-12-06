const fs = require("fs");

// Read the input file
const input = fs.readFileSync("sample.txt", "utf-8");

// Parse the two lists
const [leftList, rightList] = input
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

// Create a frequency map for the right list
const rightFrequency = rightList.reduce((freq, num) => {
  freq[num] = (freq[num] || 0) + 1;
  return freq;
}, {});

// Calculate the similarity score
const similarityScore = leftList.reduce((score, num) => {
  const countInRight = rightFrequency[num] || 0;
  return score + num * countInRight;
}, 0);

console.log("Similarity Score:", similarityScore);
