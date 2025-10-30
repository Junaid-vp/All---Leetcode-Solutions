/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let a = command.replaceAll("()","o")
    let b = a.replaceAll("(","")
    return b.replaceAll(")","")
};