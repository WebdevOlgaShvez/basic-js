const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let newArr = backyard.flat().filter(el => {
    if(el=='^^'){
      return true;
    }
    else return 0;
  });

return newArr.length;
};
