/*
    1.2-2
    Suppose that for inputs of size n on a particular computer, insertion sort runs in 8n^2
    steps and merge sort runs in 64n log n steps. For which values of n does insertion
    sort beat merge sort?
*/

const findRange = () => {
    let n = 2

    let insertion = 8 * n ** 2
    let merge = 64 * n * Math.log2(n)

    while(insertion < merge) {
        n++

        insertion = 8 * (n ** 2)
        merge = 64 * n * Math.log2(n)
    }

    return n
}

console.log(findRange())

/*
 * Answer: 2 <= n <= 43
*/


/*
    1.2-3
    What is the smallest value of n such that an algorithm whose running time is 100n2
    runs faster than an algorithm whose running time is 2
    n on the same machine?
*/

// no clue how to solve it
