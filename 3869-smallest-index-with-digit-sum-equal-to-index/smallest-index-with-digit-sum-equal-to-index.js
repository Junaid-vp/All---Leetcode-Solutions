/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {

  for(i=0;i<nums.length;i++){
    let s = nums[i].toString().split("").reduce((a,b)=>Number(a)+Number(b))
    console.log(s,i)
    
    if(Number(i) === Number(s)){

        return i 
    }
  }
  
return -1

};