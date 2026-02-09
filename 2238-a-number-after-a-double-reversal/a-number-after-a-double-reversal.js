/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let rev = num.toString().split("").reverse()
    if(rev.length === 1)return true
    if(rev[0]==="0")return false
    return true
};