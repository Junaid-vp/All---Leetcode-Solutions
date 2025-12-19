/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    let result = new Array(nums.length).fill(0)

    for(i=0; i<nums.length; i++){

        for(j=0; j<nums.length; j++){

           if( nums[j] < nums[i]){result[i] += 1}

            else if(nums[j] != nums[i]){result[j] += 0}
        }
    }
return result
};