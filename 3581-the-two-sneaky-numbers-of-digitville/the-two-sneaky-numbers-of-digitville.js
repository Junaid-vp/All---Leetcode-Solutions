/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let remove = new Set()
    let dup = new Set()
    for(let no of nums){
        if(remove.has(no)){dup.add(no)}
        else{remove.add(no)}
    }
    return [...dup]
};