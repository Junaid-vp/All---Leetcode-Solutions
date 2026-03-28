/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
let find = new Set()
 while(n !== 1){
  n = [...n.toString()].reduce((a,b)=>a+ Number(b)*Number(b),0)
  if(find.has(n))return false
  find.add(n)
 }
 return true

};