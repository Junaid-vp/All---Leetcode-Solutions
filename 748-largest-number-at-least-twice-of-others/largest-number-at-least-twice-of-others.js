/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let res = 0
  let max = Math.max(...nums)
  for(i=0;i<nums.length;i++){
    if(max !== nums[i] && (nums[i]*2) <= max){
        res++
    }
  }  
  return res===nums.length-1 ? nums.indexOf(max) : -1
};