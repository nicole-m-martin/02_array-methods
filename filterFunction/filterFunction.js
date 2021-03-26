const myFilter = (arr, cb) => {
  let filterArr = [];
  for (let array of arr) {
    if (cb(array)) filterArr = [...filterArr, array];
  }
  return filterArr;
};

module.exports = myFilter;
