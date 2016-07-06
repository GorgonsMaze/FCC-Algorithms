/**
 * Created by ianarsenault on 7/5/16.
 */


function palindrome(str) {
    var lower = str.replace(/\s|[,/:\\-]|[()]|[_]|[\.]/g, "").toLowerCase().trim();
    var reversed = lower.split("").reverse().join("");
    return lower === reversed;
}

palindrome("race car"); // output  true


