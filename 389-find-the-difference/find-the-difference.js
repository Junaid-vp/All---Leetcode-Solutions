// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// var findTheDifference = function(s, t) {
//     let x = s.split("")
//     let y = t.split("")
//     let res = []
//     for(let a of y){
//          if(!x.includes(a)){
//             res.push(a)
//          }
//     }
//  return res.join("")
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
for(let char of s){
   t = t.replace(char,"")
}
return t
    }
