/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
  
  let num = []
  for(let x of s){
    if(isNaN(x)){
    num.push(x)
   }else{
    num.pop()
   }
  } 
 
 return num.join("")
 
};