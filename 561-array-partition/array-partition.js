/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
   let num = nums.sort((a,b)=>a-b)
   let res = 0

   for(let i=0;i<num.length;i += 2){
    let x = Math.min(num[i],num[i+1])
    res += x
   }

return res
  
};