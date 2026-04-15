/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let res = arr.sort((a,b)=>fn(a)-fn(b))
   return res
};