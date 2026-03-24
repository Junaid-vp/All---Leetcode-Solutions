/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let arr = []
    let ind = []
    let str = s.split("")
   for(let i = 0; i < s.length; i++){
    if(/[a-zA-Z]/.test(s[i])){
        arr.unshift(s[i]);
        ind.push(i);
    }
}
for(i=0;i<arr.length;i++){
    str[ind[i]] = arr[i]
}
return str.join("")
};