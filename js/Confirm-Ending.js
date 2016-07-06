/**
 * Created by ianarsenault on 7/5/16.
 */
function confirmEnding(str, target) {
    var stuf = str.substr(str.length -(target.length));

    return stuf === target;
}

confirmEnding("Bastian", "n"); // Output true