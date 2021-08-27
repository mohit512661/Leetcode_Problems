/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let isPositive = true // checking whether the final output will be +ve or -ve
    let ans = "" // output will be stored here
    let flag = true // marking that "-" or "+" or any digit has encountered that means 
    // now if white space or "-" or "+" comes we will break for eg "0000-42" or "+-42" or "  -  42"
    for(let i = 0; i < s.length; i++){
        if(s[i] == " " || s[i] == "-" || s[i] == "+" || s[i] == "1" || s[i] == "2" || s[i] == "3" || s[i] == "4" || s[i] == "5" || s[i] == "6" || s[i] == "7" || s[i] == "8" || s[i] == "9" || s[i] == "0"){
            if(s[i] == " "){
                if(!flag){
                    break
                }
            }
            else{
                if(s[i] == "-"){
                    if(!flag){
                        break
                    }
                    if(ans == ""){
                        isPositive = false
                        flag = false
                    }
                }
                else if(s[i] == "+"){
                    if(!flag){
                        break
                    }
                    if(ans == ""){
                        isPositive = true
                        flag = false
                    }
                }
                else{
                    ans = ans + s[i]
                    flag = false
                }
            }
        }
        else{
            break
        }
    }
    if(ans){
        if(!isPositive){
            ans = -(+ans)
            if(ans >= Math.pow(-2, 31) && ans <= Math.pow(2, 31)){
                return ans
            }
            return Math.pow(-2, 31)
        }
        if(+ans >= Math.pow(-2, 31) && +ans < Math.pow(2, 31)){
            return +ans
        }
        let x = Math.pow(2, 31)
        return x - 1
    }
     
    return 0
};