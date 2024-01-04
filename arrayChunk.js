/**
 * Write an algorithm that takes two arguments, an array
 * and a number.  The function must return an array with
 * subarrays (the chunks) length n containing the original array elements.
 * 
 * e.g.
 * ([1, 2, 3, 4, 5], 2) =>
 *      [[1, 2], [3, 4], [5]]
 */

function arrChunk(arr, n) {
    const chunkedArr = [];

    for (const element of arr) {
        const prevChunk = chunkedArr[chunkedArr.length - 1];

        if (!prevChunk || prevChunk.length === n) {
            // new chunk with element
            chunkedArr.push([element])
        } else {
            // add element to previous chunk
            prevChunk.push(element);
        }
    }

    console.log(chunkedArr)
    return chunkedArr;
}

function altChunk(arr, n) {
    const chunkedArr = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArr.push([arr.slice(index, index + n)]);
        index += n;
    }

    return chunkedArr
}