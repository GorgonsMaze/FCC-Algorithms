function uniteUnique(arr) {
    var finalArray = [];
    for (var arg = 0; arg < arguments.length; arg++) {
        var thisArg = arguments[arg];
        for (var i = 0; i < thisArg.length; i++) {
            finalArray.push(thisArg[i]);
        }
    }

    return finalArray.reduce(function (uniqueArray, number) {

        if (uniqueArray.indexOf(number) == -1) {
            uniqueArray.push(number);
        }

        return uniqueArray;

    }, []);
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
