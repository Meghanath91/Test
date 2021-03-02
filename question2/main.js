/**
 * find out the odd one out
 * @func findOutlier
 * @param {Array} array
 * @return {number}
 */
function findOutlier(array) {
  try {
    const evenArray = array.filter((number) => number % 2 === 0);
    const oddArray = array.filter((number) => number % 2 !== 0);
    if (oddArray.length === 1) return oddArray[0];
    else return evenArray[0];
  } catch (err) {
    console.log(err);
  }
}

module.exports = findOutlier;
