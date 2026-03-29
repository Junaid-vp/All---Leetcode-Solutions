/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let check = nums.join("").replaceAll(0,"")
    if(check.length === 0 )return "0"
    let max = nums.sort((a,b)=> (a+""+b) - (b+""+a)).reverse()
    return max.join("")
};