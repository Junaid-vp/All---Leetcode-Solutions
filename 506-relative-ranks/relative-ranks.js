/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = [...score].sort((a,b)=>b-a)
    let res = []
     for(let x of score){
        let index = sorted.indexOf(x)
        if(index === 0)res.push("Gold Medal")
        else  if(index ===1)res.push("Silver Medal")
         else  if(index ===2)res.push("Bronze Medal")
           else res.push((index+1).toString())
     }
    return res
};