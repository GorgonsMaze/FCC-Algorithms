/**
 * Created by ianarsenault on 7/5/16.
 */
function slasher(arr, howMany) {
    /* splice(howMany) gets rid of everything before that index */
    var chopped =  arr.splice(howMany);
    return chopped;
}

slasher([1, 2, 3], 2); // output [3]
