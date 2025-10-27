/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dup = new Set(nums)
    return dup.size !== nums.length
};