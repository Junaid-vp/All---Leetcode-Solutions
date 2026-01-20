/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let add = 0;
    let res = []
    for(i=0;i<gain.length;i++){
        add = add + gain[i]
        if(add > 0){
            res.push(add)
        }
    }
    res.sort((a,b)=>b-a)
    return res.length == 0 ? 0 : res[0]
};