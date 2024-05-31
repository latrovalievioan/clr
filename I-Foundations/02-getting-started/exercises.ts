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
 * Rewrite the I NSERTION-SORT procedure to sort into monotonically 
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
