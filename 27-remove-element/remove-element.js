/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
let res =[]
for(let x of nums){
    if(x !== val)res.push(x)
}
nums.length=0
nums.push(...res)
return res.length

};