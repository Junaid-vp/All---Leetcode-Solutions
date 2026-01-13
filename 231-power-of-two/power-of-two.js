/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
            if(n<=0) return false
 let i=0
    while(Math.pow(2,i)<= n){
      if(Math.pow(2,i) === n){
        return true
      }
      i++
    }

    return false
};