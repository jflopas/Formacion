let returnFalsyValues = (obj, fn) => {
  for (var i in obj) {
    if (fn(obj[i])) {
      delete obj[i];
    }
  }
  return obj;
};

const result = returnFalsyValues(
  { a: 1, b: "2", c: 3 },
  (x) => typeof x === "string"
);
console.log(result);
