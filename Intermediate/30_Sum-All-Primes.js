/**
 * Sum All Primes
 *
 * Sum all the prime numbers up to and including the provided number.
 *
 * A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 *
 * The provided number may not be a prime.
 *
 * Helpful Tips: - For Loops Array.prototype.push()
 *
 *
 * sumPrimes(10) should return a number.
 * sumPrimes(10) should return 17.
 * sumPrimes(977) should return 73156.
 *
 */

function sumPrimes(num) {
    var sum = 0;

    function getPrimes(max) {
        var sieve = [];
        var primes = [];
        for (var i = 2; i <= max; i++) {
            if (!sieve[i]) {
                primes.push(i);
            }
            for (var j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
        return primes;
    }

    var primes = getPrimes(num);
    for (var k = 0; k < primes.length; k++) {
        sum += primes[k];
    }

    return sum;
}

sumPrimes(10); // Output = 17
