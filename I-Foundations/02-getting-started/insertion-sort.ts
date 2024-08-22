const insertionSortAscending = (xs: number[]) => {
    for(let i = 1; i < xs.length; i++) {
        const key = xs[i]
        let j = i - 1
        
        while (j >= 0 && xs[j] > key) {
            xs[j + 1] = xs[j]
            j--
        }

        xs[j + 1] = key
    }

    return xs
}

const insertionSortDescending = (xs: number[]) => {
    for(let i = xs.length - 2; i >= 0; i--) {
        const key = xs[i]
        let j = i + 1

        while(j < xs.length && xs[j] > key) {
            xs[j - 1] = xs[j]
            j++
        }

        xs[j - 1] = key
    }

    return xs
}

console.log(insertionSortAscending([4,5,3,1,2,6]))
console.log(insertionSortDescending([4,5,3,1,2,6]))
