export {}
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

console.log(insertionSort([5,2,4,6,1,3]))
