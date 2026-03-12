var reverseWords = function(s) {
    let split = s.split(" ");
    let arr = [];

    for (let i = 0; i < split.length; i++) {
        let ans = split[i].split("").reverse().join("");
        arr.push(ans);
    }

    return arr.join(" ");
};