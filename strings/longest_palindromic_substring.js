
//<------------------------------O(n3) time complexity------------------------------>
function isPalindrome(str){
    let l = 0
    let r = str.length - 1
    while(l <= r){
        if(str[l] != str[r]){
            return false
        }
        l++
        r--
    }
    return true
}

var longestPalindrome = function(s) {
    let ans = ""
    let max = 0
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            let substr = s.slice(i, j + 1)
            if(isPalindrome(substr) && max < substr.length){
                max = substr.length
                ans = substr
            }
        }
    }
    return ans
};

//<--------------------------------------------------------------------------------->


//<------------------------------O(n2) time complexity------------------------------>
function isPalindrome(str, left, right){
    while(left >= 0 && right < str.length && str[left] == str[right]){
        left--
        right++
    }
    return right - left - 1 
}

var longestPalindrome = function(s) {
    let start = 0
    let end = 0
    for(let i = 0; i < s.length; i++){
        let len1 = isPalindrome(s, i, i)
        let len2 = isPalindrome(s, i, i + 1)
        let len = Math.max(len1, len2)
        console.log(len)
        if(len > end - start){
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
        console.log(start, end)
    }
    return s.substring(start, end + 1)
};

//<--------------------------------------------------------------------------------->