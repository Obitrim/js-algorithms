/**
 * checks if a number is a prime number or not
 *
 * @param {number} n - number to test
 * @returns {boolean} - true if number is prime and false if otherwise
 */
function isPrime(n) {
  //   argument must be a number
  if (typeof n !== "number") {
    console.error("n should be of type number");
    return;
  }

  if (n <= 1) return false; // prime numbers aren't negative or 1
  if (n <= 3) return true; // 2 & 3 are both prime numbers

  /**
   * if number isn't 2 or 3
   * but can be divided by either of them without remainder,
   * then number is prime
   */
  if (n % 2 === 0 || n % 3 === 0) return false;

  /**
   *  prime numbers are of the form 6k (+ or -) 1
   *  where k is some integer
   *
   *  eg: 5 = (6-1) , 7 = ((1*6) + 1), 13 = ((2*6) + 1) etc
   *
   *  if the square root of n is not a prime number, n is not a
   *  prime number by mathematical definition
   *  - therefor we loop until k * k <= n
   */
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

module.exports = isPrime;
