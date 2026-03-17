/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = []
    let str = ""
    for(i=0;i<s.length;i++){
        if(!str.includes(s[i])){
           str += s[i]
        }else {
           let x = str.indexOf(s[i])
           str = str.slice(x+1)
             str += s[i]
        }
        res.push(str.length)
        
    }
    return Math.max(...res,0)
    
};