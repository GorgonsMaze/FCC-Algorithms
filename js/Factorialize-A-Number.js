/**
 * Created by ianarsenault on 7/5/16.
 */

function factorialize(num) {
    // If num is equal to 0 stop recursion
    // and return 1
    if (num === 0) {
        return 1;
    }
    // This will run until num is equal to 0
    return num * factorialize(num-1);
}

factorialize(10); // output 3628800
