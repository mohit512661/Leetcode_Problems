/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // in obj, values should be in decreasing order as when we loop thorugh it
    // we want to check the biggest value first
    let obj = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1,
    }
    let ans = "" // to store our output
    while (num != 0) {
        for (key in obj) {
            if (num / obj[key] >= 1) {
                let rem = Math.floor(num / obj[key])
                for (let i = 0; i < rem; i++) { // it will append the key, i no of times
                    ans = ans + key
                }
                num = num % obj[key]
                break
            }
        }
    }
    return ans
};