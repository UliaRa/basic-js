const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          resultArray.push(null);
          if ((i+1)<arr.length) {
            i++;
            }
          break;
        case '--discard-prev':
          if (resultArray.length > 0) {
            resultArray.pop();
          }
          break;
        case '--double-next':
          if ((i+1)<arr.length) {
          resultArray.push(arr[i+1]);
          }
          break;
        case '--double-prev':
          if (resultArray.length > 0) {
            resultArray.push(resultArray[resultArray.length-1]);
          }
          break;
        default:
          resultArray.push(arr[i]);
          break;
      }
  }
  return resultArray.filter(x => x != null);
}
}

module.exports = {
  transform
};
