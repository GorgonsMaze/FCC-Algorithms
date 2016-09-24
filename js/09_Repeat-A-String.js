/**
 * Repate a String Repeat a String
 *
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is not a positive number.
 *
 * Helpful Tips -  Global String Object
 *
 * repeatStringNumTimes("*", 3) should return "***".
 * repeatStringNumTimes("abc", 3) should return "abcabcabc".
 * repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
 * repeatStringNumTimes("abc", 1) should return "abc".
 * repeatStringNumTimes("*", 8) should return "********".
 * repeatStringNumTimes("abc", -2) should return "".
 *
 */

function repeatStringNumTimes(str, num) {
    var repeat;
    /* if num is positive - string is repeated x times
     *  else it's string is returned empty */
    repeat = ((num > 0) ? str.repeat(num) : "");
    return repeat;
}

repeatStringNumTimes("abc", 3); // Output 'abcabcabc'
