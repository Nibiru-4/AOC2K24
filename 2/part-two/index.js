const fs = require("fs");

// Read and parse the input file
const input = fs.readFileSync("sample.txt", "utf-8").trim();
const reports = input.split("\n").map((line) => line.split(" ").map(Number));

// Function to check if a report is safe
function isSafe(report) {
  const increasing = report.every(
    (_, i, arr) =>
      i === 0 ||
      (arr[i] > arr[i - 1] &&
        arr[i] - arr[i - 1] >= 1 &&
        arr[i] - arr[i - 1] <= 3)
  );

  const decreasing = report.every(
    (_, i, arr) =>
      i === 0 ||
      (arr[i] < arr[i - 1] &&
        arr[i - 1] - arr[i] >= 1 &&
        arr[i - 1] - arr[i] <= 3)
  );

  return increasing || decreasing;
}

// Function to check if a report can be made safe by removing one level
function canBeMadeSafe(report) {
  for (let i = 0; i < report.length; i++) {
    const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
    if (isSafe(modifiedReport)) {
      return true;
    }
  }
  return false;
}

// Count the safe reports
const safeCount = reports.filter(
  (report) => isSafe(report) || canBeMadeSafe(report)
).length;

console.log("Number of Safe Reports with Problem Dampener:", safeCount);
