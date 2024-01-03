/**
 * Write an algorithm that takes a number argument n
 * and will print the numbers from 1 to n.
 * Every number divisible by 3 prints "fizz"
 * Every number divisible by 5 prints "buzz"
 * Every number divisible by 3 and 5 prints "fizzbuzz"
 * 
 * n of 10
 * 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
           console.log(i);
        }
    }
}

function fizzBuzz2(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';

        if (i % 3 === 0) {
            output += 'fizz';
        }

        if (i % 5 === 0) {
            output += 'buzz';
        }

        if(output.length === 0) {
            output = i.toString();
        }

        console.log(output);
    }
}