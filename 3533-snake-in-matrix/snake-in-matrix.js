/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
 let row=0
 let col=0
 for(let x of commands){
    if(x==="UP")row--
    if(x==="DOWN")row++
    if(x==="RIGHT") col++
    if(x==="LEFT")col--
 }

 return row * n + col

};