/**
 * check if it is a valid walk
 * @func isValidWalk
 * @param {Array} walkArray
 * @return {boolean}
 */
function isValidWalk(walkArray) {
  try {
    let north = 0;
    let south = 0;
    let west = 0;
    let east = 0;
    //if number of items is not 10 then it's not valid walk
    if (walkArray.length === 10) {
      walkArray.forEach((direction) => {
        if (direction === "n") north++;
        if (direction === "s") south++;
        if (direction === "w") west++;
        if (direction === "e") east++;
      });
      //if north and south , west and east is equal person will return to the starting point
      return north === south && west === east;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
}
module.exports = isValidWalk;
