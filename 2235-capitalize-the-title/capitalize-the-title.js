/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let arr = title.split(' ')
    let res = []
    for(let x of arr){
        if(x.length >=3){
            let y = x.toLowerCase()
            let z = y.replace(y[0],y[0].toUpperCase())
            res.push(z)
        }else{
            res.push(x.toLowerCase())
        }
    }
    return res.join(' ')
};