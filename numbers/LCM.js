const primeFactors = require("./prime-factors");

function LCMByPrimeFactors(num1, num2) {}

function findLCM(num1, num2) {
  let maxValue = Math.max(num1, num2);

  while (maxValue % num1 !== 0 || maxValue % num2 !== 0) {
    maxValue += maxValue;
  }

  return maxValue;
}

module.exports = {
  LCMByPrimeFactors,
  findLCM,
};
