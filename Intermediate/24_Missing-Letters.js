/**
 * Missing letters
 Find the missing letter in the passed letter range and return it.

 If all letters are present in the range, return undefined.

 String.prototype.charCodeAt()
 String.fromCharCode()
 */


function fearNotLetter(str) {
    // Loop through string
    for (var i = 0; i < str.length; i++) {
        // If current char is not equal to first char plus increment
        if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
            // return that character minus 1
            return String.fromCharCode(str.charCodeAt(i)-1);
        }

    }

    return undefined;
}


fearNotLetter("abce"); //should return "d".
fearNotLetter("abcdefghjklmno"); // should return "i".
fearNotLetter("bcd"); // should return undefined.
fearNotLetter("yz"); // should return undefined.