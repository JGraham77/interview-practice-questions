/** Steps
 * Write a function called printSteps that takes a
 * number argument n.  It should print steps that
 * are n levels high, with appropriate width using
 * the # character to build the steps outward.
 */

function printSteps(n) {
    for (let height = 1; height <= n; height++) {
        let step = '';

        for (let width = 1; width<= n; width++) {
            if (width <= height) {
                step += '#';
            } else {
                step += ' ';
            }
        }

        console.log(step)
    }
}