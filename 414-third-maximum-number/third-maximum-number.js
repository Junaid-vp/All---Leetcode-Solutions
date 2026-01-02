/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = new Set(nums)
    let x = [...max]
    x.sort((a,b)=>b-a)
    return x.length > 2 ? x[2] : x[0]
};