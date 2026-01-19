/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0
    let arr = num.toString().split("")
    for(i=0;i<arr.length;i++){
        if(num % Number(arr[i]) == 0){
            count++
        }
    }
    return count
};