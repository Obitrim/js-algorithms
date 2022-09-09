/**
 * finds all prime factors of a number
 *
 * @param {number} number - number whose prime factors are to be found
 * @param {boolean} inCludeCount - true if you number of times each prime factor divides number
 *
 * @returns {array|number|object}
 * - an integer if number is prime
 * - array if only factors are needed
 * - object if number of times each prime factor divides number
 */
function primeFactors(number, inCludeCount = false) {
  if (typeof number !== "number") {
    return `${number} is of type ${typeof number}`;
  }

  let factors = [];
  /**
   * checks how many times 2 divides number
   *
   */
  while (number % 2 === 0) {
    number /= 2;
    factors.push(2);
  }

  /**
   * at this point number is odd
   * - we check from 3 to i * i <= number, how many times,
   * - each odd number divides number
   */
  for (let i = 3; i * i <= number; i += 2) {
    while (number % i === 0) {
      number /= i;
      factors.push(i);
    }
  }

  /**
   * At this point, number is a prime number
   */
  if (number > 2) {
    return number;
  }

  return inCludeCount
    ? factors.reduce((acc, factor) => {
        acc[factor] = acc[factor] ? acc[factor] + 1 : 1;
        return acc;
      }, {})
    : Array.from(new Set(factors));
}

module.exports = primeFactors;
