/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let no = false
    return function(...args){
        if(no)return undefined
        no=true
       let arr = fn(...args)
       return arr
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
