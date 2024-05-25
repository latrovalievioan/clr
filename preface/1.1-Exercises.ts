export {};
// 1.1-1 Insertion sort
function insertionSort(arr: number[]) {
  for (let j = 1; j <= arr.length - 1; j++) {
    const curr = arr[j];
    let i = j - 1;

    while (i >= 0 && arr[i] > curr) {
      arr[i + 1] = arr[i];
      i--;
    }

    arr[i + 1] = curr;
  }

  return arr;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));

// 1.1-2 Rewrite insertion sort procedure to sort into nonincreasing order.
function nonIncreasingInsertionSort(arr: number[]) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let curr = arr[j];
    let i = j - 1;

    while (i >= 0 && arr[i] < curr) {
      arr[i + 1] = arr[i];
      i--;
    }

    arr[i + 1] = curr;
  }

  return arr;
}

console.log(nonIncreasingInsertionSort([5, 2, 4, 6, 1, 3]));

/* 1.1-3 Consider the searching problem:
 * Input: A sequence of n numbers A = (a1,a2,...,an) and a value v.
 * Output: An index i such that v = A[i] or NIL if v does not appear in A.
 *
 * Write code for linear search, which scans through the sequence, looking for v.
 */
function linearSearch(arr: number[], v: number) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === v) return i;
  }

  return null;
}

console.log(linearSearch([5, 2, 4, 6, 1, 3], 100));

