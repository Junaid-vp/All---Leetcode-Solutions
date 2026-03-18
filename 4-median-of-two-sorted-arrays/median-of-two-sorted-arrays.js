/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
let sort = [...nums1,...nums2].sort((a,b)=>a-b)

if(sort.length%2 === 1){
    let x = (sort.length / 2) -  0.5
    return  sort[x]
}else if(sort.length%2===0){
    let y = sort.length / 2
    let res = ( sort[y-1] + sort[y] ) / 2
    return res
}

};