/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let x = new Set()
    let arr = []
    for(i=0;i<nums.length;i++){
        if(x.has(nums[i])){
            arr.push(nums[i])
        }else{
            x.add(nums[i])
        }
    }

    return arr
};



// var findDuplicates = function(nums) {
//     let res = [];

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j] && !res.includes(nums[i])) {
//                 res.push(nums[i]);
//             }
//         }
//     }

//     return res;
// };