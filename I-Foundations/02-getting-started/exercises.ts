export {}
/*
 * 2.1-1
 * Using Figure 2.2 as a model, illustrate the operation of INSERTION-SORT on an
 * array initially containing the sequence (31,41,59,26,41,58)
*/
const insertionSort = (xs: number[]) => {
    for (let i = 1; i < xs.length; i++) {
        let key = xs[i]
        let j = i - 1

        while(j >= 0 && xs[j] > key) {
            xs[j + 1] = xs[j]
            j--
        }
        xs[j + 1] = key
    }

    return xs
}

console.log(insertionSort([31,41,59,26,41,58]))

/////////////////////////////////////////////////////////////////////////////////////////

/*
 * 2.1-2 
 * Consider the procedure SUM-ARRAY on the facing page. It computes the sum of
 * the n numbers in array A[1:n] State a loop invariant for this procedure, and use
 * its initialization, maintenance, and termination properties to show that the 
 * SUMARRAY procedure returns the sum of the numbers in A[1:n] 
*/

const sumArray = (xs: number[]) => {
    let sum = 0;

    for(let i = 0; i < xs.length; i++) {
        sum += xs[i]
    }

    return sum
}

console.log(sumArray([1,2,3,4,5]))

/*
 * Loop invariant:
 *
 * The sum is equal to the sum of A[1:i]
*/

/////////////////////////////////////////////////////////////////////////////////////////

/*
 * 2.1-3
 * Rewrite the INSERTION-SORT procedure to sort into monotonically 
 * decreasing instead of monotonically increasing order.
*/

const insertionSortDecreasing = (xs: number[]) => {
    for (let i = 1; i < xs.length; i++) {
        const key = xs[i]
        let j = i - 1

        while(j >= 0 && xs[j] < key) {
            xs[j+1] = xs[j]
            j--
        }

        xs[j+1] = key
    }

    return xs
}

console.log(insertionSortDecreasing([31,41,59,26,41,58]))

/*
 * 2.1-4
 * Consider the searching problem:
 *
 * Input: A sequence of n numbers (a1,a2,...,an) stored in array A[1:n] and a
 * value x.
 *
 * Output: An index i such that x equals A[i] or the special value NIL if x does not
 * appear in A.
 *
 * Write pseudocode for linear search, which scans through the array from beginning to end, looking for x. 
 * Using a loop invariant, prove that your algorithm is
 * correct. Make sure that your loop invariant fulfills the three necessary properties.
*/

const linearSearch = (xs: number[], x: number) => {
    let foundAt: number | null = null;

    for(let i = 0; i < xs.length; i++) {
        foundAt = xs[i] === x ? i : null;
    }

    return foundAt;
} 
