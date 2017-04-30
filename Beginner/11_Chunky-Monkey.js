/**
 * Chunky Monkey
 *
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 *
 * Helpful Tips - Array.prototype.push() + Array.prototype.slice()
 *
 * chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
 *
 */

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    /*Loop through array - noting chunk size increment*/
    for (var i = 0; i < arr.length; i+=size) {
        /* Pushes split array at index 0 - chunk size
         incrementing  each time into the new array */
        newArr.push(arr.slice(i, i+size));
    }
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // output  [[0,1,2,],[3,4,5]]
