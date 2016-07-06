/**
 * Created by ianarsenault on 7/5/16.
 */

function reverseString(str) {
    var output = str.split("").reverse().join("");
    return output;
}

reverseString("hello"); // output  'olleh'