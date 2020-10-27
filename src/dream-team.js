const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

let result = members.filter(item => typeof item =='string');
 
let arr=result.map(item=>{
  item = item.trim().toUpperCase().charAt(0);
  return item
 } )
  
return arr.sort().join('').toString()
};
