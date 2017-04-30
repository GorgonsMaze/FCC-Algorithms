/**
 * Spinal Tap Case
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.\
 *
 * Helpful Tips - RegExp + String.prototype.replace()
 *
 *  Expected Output
 *
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
 * spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
 * spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
 * spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
 * spinalCase("AllThe-small Things") should return "all-the-small-things".
 *
 */


function spinalCase(str) {
    // Regex for whitespace and underscores
    var regex = /\s+|_+/g;

    // Replace the string's camel case with space between each word
    // then set the string to lower case
    var answr = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

    // Replace the strings white-space and underscores with "-" dash
    answr = answr.replace(regex, '-');

    return answr;
}

spinalCase('This Is Spinal Tap');