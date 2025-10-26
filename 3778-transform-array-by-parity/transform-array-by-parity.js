/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let result = []
    for(let res of nums){
        if(res%2===0){
            result.push(0)
        }else if(res%2===1){
            result.push(1)
        }
         
    }
    return result.sort()

   
};