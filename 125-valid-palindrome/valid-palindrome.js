/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lower = s.toLowerCase()
    let str = ""
    for(i=0;i<s.length;i++){
        if("abcdefghijklmnopqrstuvwxyz1234567890".includes(lower[i])){
            str += lower[i]
        }
    }
    if(str.length ===0)return true
    if(str == str.split("").reverse().join(""))return true
    else return false
};