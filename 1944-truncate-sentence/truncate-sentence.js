/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr = s.split(" ")
    let res = ""
    for(i=0;i<k;i++){
        res += " "
        res +=arr[i]
    }
    return res.trim()
};