/**
 * Pig Latin
 *
 * Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 * Input strings are guaranteed to be English words in all lowercase.


 Array.prototype.indexOf()
 Array.prototype.push()
 Array.prototype.join()
 String.prototype.substr()
 String.prototype.split()


 translatePigLatin("california") should return "aliforniacay".
 translatePigLatin("paragraphs") should return "aragraphspay".
 translatePigLatin("glove") should return "oveglay".
 translatePigLatin("algorithm") should return "algorithmway".
 translatePigLatin("eight") should return "eightway".


 */

function translatePigLatin(str) {
    var vowel = /[aeiou]/gi;
    var word = str.split('');
    var cluster = '';

    if (word[0].match(vowel)) {
        word.push("way");
        word = word.join('');
        return word;

    } else if (str.search(vowel) != -1) {
        cluster = str.slice(0, str.search(vowel));
        return str.slice(str.search(vowel)) + cluster + "ay";
    }



}

translatePigLatin("paragraphs");