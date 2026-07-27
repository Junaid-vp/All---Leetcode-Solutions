/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let arr = nums.toSorted((a,b)=>b-a)
    
return (nums[(nums.indexOf(arr[0]))] - 1 ) * (nums[(nums.indexOf(arr[1]))] - 1 )

};