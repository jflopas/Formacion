const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const arr = [arrNumber1, arrNumber2, arrNumber3];
const intersection = arr.reduce((a, b) => a.filter((c) => b.includes(c)));
console.log(intersection);
