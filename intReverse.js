/**
 * Write a function that takes an integer
 * argument and returns the reversed integer
 * as a number data type
 * 
 * input: 12345
 * output: 54321
 * 
 * input: -42
 * output: -24
 * 
 */

function integerReverse(num) {
    let reversed = num.toString().split('').reverse().join('');

    
    // if (num < 0) {
    //     console.log(parseInt(reversed) * -1)
    //     return parseInt(reversed) * -1;   
    // } else {
    //     console.log(reversed);
    //     return parseInt(reversed);
    // }
    console.log(parseInt(reversed) * Math.sign(num));
    return parseInt(reversed) * Math.sign(num);
}