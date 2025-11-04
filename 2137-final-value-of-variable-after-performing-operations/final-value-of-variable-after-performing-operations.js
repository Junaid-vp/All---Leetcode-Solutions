/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result=0
    for(let val of operations){
        if(val=="X++"||val=="++X"){result +=1}
        if(val=="X--" || val=="--X"){result += -1}
    }
    return result
};