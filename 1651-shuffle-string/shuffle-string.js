/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = ""
    for(let i = 0 ; i < indices.length ; i++){
        let y = indices.indexOf(i)
        result += s[y]
    }
    return result
}