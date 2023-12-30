/**
 * Write a function isPalindrome
 * that takes a string argument and returns
 * true or false if the string is a palindrome
 * 
 * kayak -> true
 * mango -> false
 * etc
 */

function isPalindrome(str) {
    let reversed = '';

    for (const character of str) {
        reversed = character + reversed;
    }

    console.log(str === reversed)
    return str === reversed;
}