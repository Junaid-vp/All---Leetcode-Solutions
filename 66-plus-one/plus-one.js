/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   let num = digits.join("")
   let Add = (BigInt(num)+1n).toString()
   let res = []
   for(i=0;i<Add.length;i++){
     res.push(Number(Add[i]))
   }
   return res
};

