/**
 * Created by ianarsenault on 7/5/16.
 */

function repeatStringNumTimes(str, num) {
    /* if num is positive - string is repeated x times
     *  else it's string is returned empty */
    var repeat = ((num > 0) ? str.repeat(num) : "");
    return repeat;
}

repeatStringNumTimes("abc", 3); // Output 'abcabcabc'
