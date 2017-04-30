/**
 * Caesar's Cipher

 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
   In a shift cipher the meanings of the letters are shifted by some set amount.

 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places
   Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.

 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation)
   but do pass them on.

 * Helpful Tips - String.prototype.charcodeAt()  + String.fromCharCode()

 * rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
 * rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
 * rot13("SERR YBIR?") should decode to "FREE LOVE?"
 * rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
 */

function rot13(str) {
    // Create empty array
    var newArr = [];
    // Split the string up into an array
    var arr = str.split('');

    // Loop through the array length
    for (var i = 0; i < arr.length; i++) {
        // Assign each char code of i to x
        var x = arr[i].charCodeAt(0);

        // If x >= 78 && <=90
        if (x >= 78 && x <= 90) {
            // We subtract 13 from its unicode number
            x = x - 13;
            // Return string character
            // and push into new array
            newArr.push(String.fromCharCode(x));

        } else if (x < 78 && x > 64) {
            // We add 13 from its unicode number
            x = x + 13;
            // Return string character
            // and push into new array
            newArr.push(String.fromCharCode(x));

        } else {
            // Return string character
            // and push into new array
            newArr.push(String.fromCharCode(x));
        }

    }

    // Join elements in array as a string
    return newArr.join('');

}
rot13("SERR PBQR PNZC");