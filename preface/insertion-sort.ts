function insertionSort(arr: number[]) {
  for (let j = 0; j <= arr.length - 1; j++) {
    console.log(arr);
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
