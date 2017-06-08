/**
 *
 * WIP
 *
 * Convert HTML Entities
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
    var regex = /[<|>|"|'|&]/g;

    var tempString = str.split('');

    while (match = regex.exec(str)) {
        console.log(match.index + ' ' + str.lastIndex);
    }
    return tempString;
}

console.log(convertHTML("Dolce & Gabbana"));

console.log(convertHTML('Stuff in "quotation marks"'));