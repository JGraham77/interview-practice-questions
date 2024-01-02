/**
 * Write a function that takes a string
 * argument and returns the most occuring
 * letter in that string
 * 
 * input: "Professionals"
 * output: 's'
 */

function maxCharCount(str) {
    const breakdown = {};

    // Can easily put this part into it's own function
    const sanitized = str.toLowerCase();

    for(const char of sanitized) {
        if (breakdown[char]) {
            breakdown[char] += 1;
        } else {
            breakdown[char] = 1;
        }
    }

    let maxValue = 0;
    let maxChar = '';
    for (const key in breakdown) {
        if (breakdown[char] > maxValue) {
            maxChar = char;
            maxValue = breakdown[char];
        }
    }

    console.log(maxChar);
    return maxChar;
}

maxCharCount('Professionals');