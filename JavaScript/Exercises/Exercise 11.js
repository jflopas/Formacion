let splitArrayIntoChunks = (arr, num) => {
  const arrays = [];

  for (let i = 0; i < arr.length; i += num) {
    let chunks = arr.slice(i, i + num);
    arrays.push(chunks);
  }
  return arrays;
};

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);
