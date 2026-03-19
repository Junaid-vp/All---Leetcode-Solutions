/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s){
    let str = s.split("")
    let arr = []
    for(i=0;i<s.length;i++){
      if("aeiouAEIOU".includes(s[i])){
        arr.unshift(i)
      }}
 for(i=0;i<str.length;i++){
     let x = arr.length - 1 - i
     str[arr[x]] = s[arr[i]];
 }
   return str.join("")
};