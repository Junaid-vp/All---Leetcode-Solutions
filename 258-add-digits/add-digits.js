/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr = num.toString().split("")
    if(arr.length >=2){
        num=arr.reduce((a,b)=>Number(a)+Number(b),0)
       return addDigits(num)
    }
    return num
};