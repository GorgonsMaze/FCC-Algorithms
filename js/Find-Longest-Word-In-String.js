/**
 * Created by ianarsenault on 7/5/16.
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
