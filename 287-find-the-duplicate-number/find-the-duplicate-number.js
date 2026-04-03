/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let num = new Set()
    let arr = new Set()
    for(i=0;i<nums.length;i++){
        if(num.has(nums[i])){
            arr.add(nums[i])
        }else{
            num.add(nums[i])
        }
    }
    return Number([...arr].join(""))
};