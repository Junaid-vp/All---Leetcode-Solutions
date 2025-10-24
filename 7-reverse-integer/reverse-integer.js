/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let  s = x < 0 ? -1 : 1;
   let n = Math.abs(x).toString().split("").reverse().join("")
   n = Number(n)*s


    if(n > Math.pow(2,31)-1 || n < Math.pow(-2,31)){
        return 0 }
    
   return n
};