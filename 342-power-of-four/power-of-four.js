/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if(n<=0)return false
  let i = 0
  while (Math.pow(4,i)<=n){
    if(Math.pow(4,i)===n){
        return true
    }
    i++
  }
  return false
};