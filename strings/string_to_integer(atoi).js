/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let isPositive = true
    let first = true
    let ans = 0
    let prev = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " " || s[i] == "-" || s[i] == "+" || s[i] == "1" ||
            s[i] == "2" || s[i] == "3" || s[i] == "4" || s[i] == "5" ||
            s[i] == "6" || s[i] == "7" || s[i] == "8" || s[i] == "9" || s[i] == "0") {
            if (s[i] != " ") {
                if (s[i] == "-") {
                    if (ans == "") {
                        isPositive = false
                    }
                }
                else if (s[i] != "+") {
                    ans = ans * 10 + +s[i]
                    if ((ans - +s[i]) / 10 != prev) {
                        if (!isPositive) {
                            return -2147483648
                        }
                        return 2147483648 - 1
                    }
                    prev = ans
                }
            }
        }
        else {
            break
        }
    }
    if (ans) {
        if (!isPositive) {
            return -ans
        }
        return ans
    }
    return 0
};






/*
if((ans - +s[i]) / 10 != prev){
    if(!isPositive){
        return -2147483648
    }
    return 2147483648 - 1
}
prev = ans
*/