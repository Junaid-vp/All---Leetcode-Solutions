/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let result = new Set(sentence)
    return result.size === 26
};