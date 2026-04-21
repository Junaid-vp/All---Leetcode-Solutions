/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let x = word1.length
    let y= word2.length
    let big = Math.max(x,y)
    let word = big === x ? word1 : word2
    let res =""
    for(i=0;i<word.length;i++){
        res += word1[i] ??""
        res+= word2[i] ?? ""
    }
    return res
};