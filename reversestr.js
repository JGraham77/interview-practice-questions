/**
 * Write an algorithm that takes a string (str)
 * argument and reverses it.
 * 
 * reverse -> esrever
 * hungrybox -> xobyrgnuh
 * etc.
 */

function stringReverse(str) {
    let reversed = '';

    for (const char of str) {
        reversed = char + reversed
    }

    console.log(reversed)
    return reversed;
}

stringReverse('reverse');