const merge = (lxs: number[], rxs: number[]) => {
  const result = Array(lxs.length + rxs.length);
  let assignI = 0;
  let lI = 0;
  let rI = 0;

  while (lI < lxs.length || rI < rxs.length) {
    if (lxs[lI] < rxs[rI] || rI >= rxs.length) {
      result[assignI] = lxs[lI];
      lI++;
    } else {
      result[assignI] = rxs[rI];
      rI++;
    }
    assignI++;
  }

  return result;
};

const mergeSortAscending = (xs: number[]) => {
  if (xs.length === 1) return xs;

  const lI = 0;
  const rI = xs.length - 1;
  const mI = Math.ceil((lI + rI) / 2);

  const left = xs.slice(lI, mI);
  const right = xs.slice(mI, rI + 1);

  return merge(mergeSortAscending(left), mergeSortAscending(right));
};

console.log(mergeSortAscending([2,1,6,5,4,35,3]));
