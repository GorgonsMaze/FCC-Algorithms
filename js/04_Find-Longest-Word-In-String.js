/**
 * Find the Longest Word in a String
 * Return the length of the longest word in the provided sentence.

 * Your response should be a number.

 *  Helpful Tips - String.prototype.split() + String.length

 * findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
 * findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
 * findLongestWord("May the force be with you") should return 5.
 * findLongestWord("Google do a barrel roll") should return 6.
 * findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
 * findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
 */

function findLongestWord(str) {

    var foo = str.split(" "); //foo length = 9

    var longest = 0;

    // Loop through the array
    for (var i = 0; i < foo.length; i++) {
        if (foo[i].length > longest) {
            longest = foo[i].length;
        }
    }
    return longest;

}

findLongestWord("The quick brown fox jumped over the lazy dog"); // output '6'
