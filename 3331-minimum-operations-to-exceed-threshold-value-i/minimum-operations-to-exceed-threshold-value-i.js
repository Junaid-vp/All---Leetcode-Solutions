/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = 0
    for(let x of nums){
        if(x<k)
        count++
    }

    return count
};