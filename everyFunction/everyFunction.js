const myEvery = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) return false;
  }
  return true;
};

module.exports = myEvery;
