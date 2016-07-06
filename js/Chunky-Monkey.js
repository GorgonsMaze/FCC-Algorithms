/**
 * Created by ianarsenault on 7/5/16.
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
