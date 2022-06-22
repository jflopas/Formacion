let roundedTo = (num, decimals) => {
  return Number(Math.round(num + "e" + decimals) + "e-" + decimals);
};

console.log(roundedTo(2.123, 2));
console.log(roundedTo(1.123456789, 6));
