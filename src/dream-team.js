const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newTeam=[];
 for (let i=0; i< members.length-1; i++){
   if(typeof members[i]== 'string'){
    newTeam.push(members[i])
   }
  

 }
   //return newArr.trim().charAt(0).sort().toUpperCase().join('');
};
