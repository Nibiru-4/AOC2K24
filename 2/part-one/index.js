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

// Count the safe reports
const safeCount = reports.filter(isSafe).length;

console.log("Number of Safe Reports:", safeCount);
