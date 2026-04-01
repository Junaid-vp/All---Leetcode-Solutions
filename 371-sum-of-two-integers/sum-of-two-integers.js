/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    return [a,b].reduce((a,b)=>a+b,0)
};