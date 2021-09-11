/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let openers = ["(", "[", "{"]
    let closers = {
        ")" : "(",
        "]" : "[",
        "}" : '{'
    }
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(!stack.length && !openers.includes(s[i])){
            return false
        }
        if(stack.length && closers[s[i]] == stack[stack.length - 1]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
    }
    if(stack.length){
        return false
    }
    else{
        return true
    }
};