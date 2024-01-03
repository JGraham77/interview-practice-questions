/**
 * Write an algorithm that takes a string argument
 * and capitalizes the first letter of each new word
 * in a sentence.
 * 
 * "the quick brown fox jumps over the lazy dog" =>
 * "The Quick Brown Fox Jumps Over The Lazy Dog"
 */

function capitalize(str) {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {

        if (str [i-1] === ' ') {
            result += str[i].toUpperCase();
            
        } else {
            result += str[i];
        }
    }

    console.log(result);
    return result;
}