/**
 * Wirte a function that takes a string
 * argument and breaks it down to an object
 * where each property is a letter from the string
 * and value is how many times it appears
 * 
 * input: 'Professionals'
 * output:
 * {
 * p:1,
 * r:1,
 * o:2,
 * f:1,
 * e:1,
 * s:3,
 * i:1,
 * n:1,
 * a:1,
 * l:1
 * }
 */

function stringBreakdown(str) {
    const breakdown = {};
    const sanitized = str.toLowerCase()

    for (const character of str) {
        if (breakdown[character]) {
            breakdown[character] += 1;
        } else {
            breakdown[character] = 1;
        }
    }

    console.log(breakdown);
    return breakdown;
}

stringBreakdown('Professionals')