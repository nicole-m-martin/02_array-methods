const myMap = (arr, cb) => {
  let newArray = [];
  for (let item of arr) {
    newArray = [...newArray, cb(item)];
  }
  return newArray;
};

module.exports = myMap;
