/**
 * Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only found in one of the two given arrays,
 * but not both. In other words, return the symmetric difference of the two arrays.
 *
 * Helpful Tips - Comparison Operators , Array.prototype.slice() , Array.prototype.filter()
 , Array.prototype.indexOf() , Array.prototype.concat()

 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
   ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
 * ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
 * [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
 * [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
 * [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
 * [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
 */
function diffArray(arr1, arr2) {
    var newArr = [];
    // Loop through arr1
    for (var i = 0; i < arr1.length; i++) {
        // If the indices of arr1 does not equal
        // and indices of array 2 it will equal -1
        if (arr2.indexOf(arr1[i]) == -1) {
            // In this case we want to push that index into new array
            newArr.push(arr1[i]);
        }
    }
    // Loop through the second array
    for (var j = 0; j < arr2.length; j++) {
        // If arr2 indices do not match any indices of array 1
        // it will end up equalling -1
        if (arr1.indexOf(arr2[j]) == -1) {
            // In this case we want to push that index into new array
            newArr.push(arr2[j]);
        }
    }
    // Return the new array with differences
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
