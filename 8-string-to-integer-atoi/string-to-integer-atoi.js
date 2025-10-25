/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let res = parseInt(s)
    if(isNaN(res)){

        return 0
    }
   else if(res<Math.pow(-2,31)){

        return Math.pow(-2,31)

    }else if(res>Math.pow(2,31)-1){

       return Math.pow(2,31)-1

    }else{

        return res
    }

};