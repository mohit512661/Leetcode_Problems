/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let output_arr = []
    genParentheses(n, "", output_arr, 0, 0)
    return output_arr
};

function genParentheses(n, output_str, output_arr, open, close){
    if(output_str.length == n * 2){
        output_arr.push(output_str)
        return
    }
    if(open < n) genParentheses(n, output_str + "(", output_arr, open + 1, close)
    if(close < open) genParentheses(n, output_str + ")", output_arr, open, close + 1)
}