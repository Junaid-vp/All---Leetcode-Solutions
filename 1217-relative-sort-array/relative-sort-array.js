/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = []
    let not =[]
    for(let x of arr2){
        for(let y of arr1){
            if(x===y){
                arr.push(y)
            }

        }
    }
    for(let x of arr1){
        if(!arr2.includes(x)){
            not.push(x)
        }
    }
    not.sort((a,b)=>a-b)
return [...arr,...not]
};