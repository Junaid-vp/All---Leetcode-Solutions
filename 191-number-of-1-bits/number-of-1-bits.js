/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary = n.toString(2)
    let count =0
    for(i=0;i<binary.length;i++){
        if(0< binary[i])count++
    }

    return count
};