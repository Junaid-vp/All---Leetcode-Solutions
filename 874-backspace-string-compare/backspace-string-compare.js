/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let fun=(str)=>{
      let res = []
      for(let x of str){
        x==="#" ? res.pop() : res.push(x)
      }
      return res.join(" ")
    }
    return fun(s)===fun(t)
};