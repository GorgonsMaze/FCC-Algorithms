/**
 *  Sum All Numbers in Range
 *
 *
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

 The lowest number will not always come first.


 * Here are some helpful links:

 Math.max()
 Math.min()
 Array.prototype.reduce()

 sumAll([1, 4]) should return a number.
 sumAll([1, 4]) should return 10.
 sumAll([4, 1]) should return 10.
 sumAll([5, 10]) should return 45.
 sumAll([10, 5]) should return 45.


 */
/* Sum all numbers in a range */
function sumAll(arr) {
    var low = Math.min.apply(Math, arr); // Lowest num in array
    var high = Math.max.apply(Math, arr); // highest num in array
    var answer = low; // answer is set to lowest number
    // Loop through starting at lowest number and ending at highest number
    for (var i = low; i < high; i++) {
        // Answer starts off as lowest num in array,
        // then becomes current number + the next number
        answer += i + 1;
        console.log(answer);
    }

    return answer;
}

sumAll([5, 10]);