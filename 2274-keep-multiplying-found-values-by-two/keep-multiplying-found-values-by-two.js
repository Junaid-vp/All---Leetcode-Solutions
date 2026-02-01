/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let x =original
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(nums[j]===x)x = x*2
        }
    }
    return x
};