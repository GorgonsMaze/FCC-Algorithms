/**
 * Return Largest Numbers in Arrays

 * Return an array consisting of the largest number from each provided sub-array.
   For simplicity, the provided array will contain exactly 4 sub-arrays.

 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

 * Helpful tips -  Comparison Operators

 * largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
 * largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
 * largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
 */

function largestOfFour(arr) {
    var greatest = []; // Empty array to store greatest numbers from each sub array

    for (var i = 0; i < arr.length; i++) {
        var maximum = -Infinity; // works for negative numbers
        // Iterate through each sub array
        for (var j = 0; j < arr[i].length; j++) {
            // If index of sub array is greater than -Infinity
            if (arr[i][j] > maximum) {
                maximum = arr[i][j]; // index number of sub array becomes maximum variable
            }

        }
        greatest.push(maximum); // after each iteration add the greatest number to the empty array
    }
    return greatest; // return the new array
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* function largestOfFour(arr) {
 var greatest = [];
 for (var i = 0; i < arr.length; i++) {
 greatest.push(Math.max.apply(Math, arr[i]));
 }
 return greatest;
 }

 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

 */

