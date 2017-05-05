/** Roman Numeral Converter
 *  Convert the given number into a roman numeral.

 if a symbol appears after a larger symbol it is added

 Example: VI = V + I = 5 + 1 = 6

 But if the symbol appears before a larger symbol it is subtracted

 Example: IX = X - I = 10 - 1 = 9

 and also to extract digits from your number, use modulus %

 **/

function convertToRoman(num) {
    var romanNumeral = '';
    var romanNumeralObj = [
        {d: 1000, r: "M"},
        {d: 900, r: "CM"},
        {d: 500, r: "D"},
        {d: 400, r: "CD"},
        {d: 100, r: "C"},
        {d: 90, r: "XC"},
        {d: 50, r: "L"},
        {d: 40, r: "XL"},
        {d: 10, r: "X"},
        {d: 9, r: "IX"},
        {d: 5, r: "V"},
        {d: 4, r: "IV"},
        {d: 1, r: "I"}
    ];


    for (var i = 0; i < romanNumeralObj.length; i++) {
        while (romanNumeralObj[i].d <= num) {

            romanNumeral += romanNumeralObj[i].r;
            num -= romanNumeralObj[i].d;

        }
    }


    return romanNumeral;


}

console.log(convertToRoman(32));


/********* First Attempt **********/


function getPlacesValue(numToCheck) {
    var digits = numToCheck.toString();
    var length = digits.length;
    var placeValueArray = [];

    for (var i = 0; i < length; i++) {
        placeValueArray.push(Math.pow(10, (length - i) - 1) * parseInt(digits[i]));
    }

    return placeValueArray;
}

function convertToRoman2(num) {

    var romanNumeralArray = [];
    var romanNumeralObj = {
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII",
        9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX",
        80: "LXXX", 90: "XC", 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC",
        800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"
    };


    var placeValue = getPlacesValue(num);

    for (var i = 0; i < placeValue.length; i++) {
        for (var key in romanNumeralObj) {
            if (romanNumeralObj.hasOwnProperty(key)) {
                if (placeValue[i] == key) {
                    romanNumeralArray.push(romanNumeralObj[key]);
                }
            }
        }
    }

    return romanNumeralArray.join('');


}

convertToRoman2(3999);