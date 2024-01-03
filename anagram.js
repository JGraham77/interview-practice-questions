/**
 * Write a function that takes two string
 * arguments and returns a boolean true/false
 * value if the two strings are anagrams or not
 * 
 * input: 'players', 'parsley'
 * output: true
 * 
 * input 'Clint Eastwood', 'old west action'
 * output: true
 */

function anagrams(strOne, strTwo) {
    const breakOne = breakItDown(strOne);
    const breakTwo = breakItDown(strTwo);

    for (const char in breakOne) {
        if (breakOne[char] !== breakTwo[char]) {
            console.log('nope')
            return false;
        }
    }

    console.log('yup')
    return true;
}

function breakItDown(str) {
    const breakdown = {};
    const sanitized = str.toLowerCase().replaceAll(' ', '');

    for (const character of sanitized) {
        if (breakdown[character]) {
            breakdown[character] += 1;
        } else {
            breakdown[character] = 1;
        }
    }

    return breakdown;
}