/**
 * Sum All Odd Fibonacci Numbers
 *
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 *
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 *
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
 *
 * Helpful Tips - remainder
 *
 * Output:
 * sumFibs(1) should return a number.
 * sumFibs(1000) should return 1785.
 * sumFibs(4000000) should return 4613732.
 * sumFibs(4) should return 5.
 * sumFibs(75024) should return 60696.
 * sumFibs(75025) should return 135721.
 *
 */


function sumFibs(num) {

    var previousNumber = 0;
    var currentNumber = 1;
    var oddSum = 0;

    while (currentNumber <= num) {
        if (currentNumber % 2 !== 0) {
            oddSum = oddSum + currentNumber;
        }

        currentNumber += previousNumber;
        previousNumber = currentNumber - previousNumber;
    }

    return oddSum;

}

sumFibs(4);