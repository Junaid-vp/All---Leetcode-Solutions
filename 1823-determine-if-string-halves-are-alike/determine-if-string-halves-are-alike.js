/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let first = s.slice(0,s.length / 2);
    let second = s.slice(s.length /2 , s.length)
    let count1 = 0
    let count2 = 0
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(i=0;i<first.length;i++){
     for(j=0;j<vowel.length;j++){
         if(first[i]===vowel[j])count1 ++
         if(second[i]=== vowel[j])count2++      
     }
    }
    return count1 == count2
};