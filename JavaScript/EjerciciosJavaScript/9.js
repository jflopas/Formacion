let toLowerCaseKeys = (obj) => {
  let object = {};
  for (let i in obj) {
    object[i.toLowerCase()] = obj[i];
  }
  return object;
};

const myObject = { NamE: "Charles", ADDress: "Home Street" };
const myObjLowerCase = toLowerCaseKeys(myObject);
console.log(myObjLowerCase);
