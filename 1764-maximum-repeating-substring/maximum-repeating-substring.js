/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 0
    let repeat = word
    while(sequence.includes(repeat)){
        repeat += word
        count++
    }

    return count
};