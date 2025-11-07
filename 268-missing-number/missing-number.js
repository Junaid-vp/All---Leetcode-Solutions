/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result = nums.length
    for(i=0;i<nums.length;i++){
        result ^= i ^ nums[i]
    }
    return result
};