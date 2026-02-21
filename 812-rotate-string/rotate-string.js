/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    for(i=0;i<s.length;i++){
        s = s + s[0]
        s = s.slice(1)
        if(s===goal){
            return true
        }
    }

    return false
 
};