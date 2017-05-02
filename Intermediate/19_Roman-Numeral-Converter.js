/** Roman Numeral Converter
 *  Convert the given number into a roman numeral.
 */


/**
 if a symbol appears after a larger symbol it is added

 Example: VI = V + I = 5 + 1 = 6

 But if the symbol appears before a larger symbol it is subtracted

 Example: IX = X - I = 10 - 1 = 9

 and also to extract digits from your number, use modulus %

 **/

// var ones = Math.floor(num % 10),
//     tens = Math.floor(num / 10 % 10),
//     hundreds = Math.floor(num / 100 % 10),
//     thousands = Math.floor(num % 10000 / 1000);
// 2 , 3

// Method to take number and length of number
// and assign place values
// ex: 256 becomes 200, 50, 6
function getPlacesValue(numToCheck) {
    var digits = numToCheck.toString();
    var length = digits.length;
    var placeValueArray = [];

    for (var i = 0; i < length; i++) {
        placeValueArray.push(Math.pow(10, (length- i) -1) * parseInt(digits[i]));
    }
    return placeValueArray;
}

function convertToRoman(num) {


// I would start with the highest (M if doing roman numerals) and count how many you have, and the remainder.
//     var year = 1979;
//     var howManyMs = Math.floor(year / 1000);
//     var remainder = year % 1000;

    const romanNumeralObj = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    };

    return getPlacesValue(num);

}


console.log(convertToRoman(342));


//
// const romanNumeralObj = {
//     1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII",
//     9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX",
//     80: "LXXX", 90: "XC", 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC",
//     800: "DCCC", 900: "CM", 1000: "M"
// };

