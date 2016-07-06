/**
 * Created by ianarsenault on 7/5/16.
 */
function titleCase(str) {
    // Make string completely lowercase, then split to store as array of strings
    var newStr = str.toLowerCase().split(" ");
    for (var i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substring(1);
    }
    return newStr.join(" ");
}

titleCase("I'm a little tea pot"); //output 'I'm A Little Tea Pot'


/* Way Number 2 */

/*
 function titleCase(str) {
 // Make string completely lowercase, then split to store as array of strings
 var newStr = str.toLowerCase().split(" ");
 var upper; // blank variable to hold Capatalized string

 for (var i = 0; i < newStr.length; i++) {
 // Split each word into letters
 newStr[i] = newStr[i].split("");
 // Change the first letter of each index in the array
 newStr[i][0] = newStr[i][0].toUpperCase();
 // join the word back into the array
 upper = newStr.join(" ");

 }


 // replace "," with no-space
 return upper.replace(/[,]/g, ""); // return answer
 }

 titleCase("I'm a little tea pot");
 */


