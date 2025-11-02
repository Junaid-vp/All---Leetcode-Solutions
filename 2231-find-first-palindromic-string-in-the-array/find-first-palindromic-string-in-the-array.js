/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let result =[]
    let ignore=[]
    for(let word of words){
        if(word.split("").reverse().join("")===word){
            result.push(word)
        }else{
            ignore.push(word)
        }
    }
    return result.length==0?"":result[0]
};