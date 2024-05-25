export {}
// 1.2-1 
//
// a) Implement selection sort with immutable array.
//
// b) Give the best case and worst case running times of the algorhitm in Thetha notation.

const strangeSelectionSort = (xs: number[]) => {                //cost  |   times
    const sorted: number[] = []                                 //c1    |   1

    for(let i = 0; i < xs.length; i++) {                        //c2    |   n + 1
        let min = Infinity                                      //c3    |   n
        let max = sorted[sorted.length - 1] || -Infinity        //c4    |   n

        for (let j = 0; j < xs.length; j++) {                   //c5    |   n * n + 1
            const curr = xs[j]                                  //c6    |   n * n

            if (curr < min && curr > max) {                     //c7    |   n * n
                min = curr                                      //c8    |   k (k <= n)
            }   
        }

        sorted.push(min)                                        //c9    |   n
        min = Infinity                                          //c10   |   n
    }

    return sorted                                               //c11   |   1
}

// T(n) is:
// c1 + (c2 * n+1) + (c3 * n) + (c4 * n) + (c5 * n^2 + n) + (c6 * n^2) * (c7 * n^2) + (c8 * k) + (c9 * n) + (c10 * n) + c11
// Best case: n^2 + n
// Worst case: n^2 + n

console.log(strangeSelectionSort([1,3,2,5,6,73,44,34,26]))

//  1.2-2
//
//  Consider linear search.
//
//  a) How many elements of the input sequence need to be checked on average
//  assuming that the element being serached for is equally likely to be any
//  element in the array?
//
//  b) What are the average-case and worst-case running times of linear search
//  in Theta notation?
//
const linearSearch = (xs: number[], v: number) => {  //cost  |   times
    for (let i = 0; i < xs.length; i++) {           //c1    |   n + 1
        if (xs[i] === v) {                          //c2    |   n
            return i                                //c3    |   k (k <= 1)
        }                                           
    }

        return null                                 //c4    |   p (p <= 1)
}

//  T(n) is:
//  (c1 * n + 1) + (c2 * n) + (c3 * k) + (c4 * p)
//
//  a) n / 2
//
//  b) n / 2
console.log(linearSearch([5,4,3,2,1], 3))
