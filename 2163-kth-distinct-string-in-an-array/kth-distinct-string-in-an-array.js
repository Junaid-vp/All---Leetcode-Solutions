/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
let res = []
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i] == arr[j] && i !== j){
            res.push(arr[i])
        }
    }
}
let result = arr.filter((x)=> res.includes(x)  ? "" : x)

return result.length < k ? "" : result[k-1]

};