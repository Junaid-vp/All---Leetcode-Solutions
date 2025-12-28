/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = []
    for(let x of nums){
        result.push(Math.pow(x,2))
    }
    return result.sort((a,b)=> a - b )
};