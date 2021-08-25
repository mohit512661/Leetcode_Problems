var lengthOfLongestSubstring = function(s) {
    // sliding window technique
    let i = 0
    let j = 0
    let max = 0
    let obj = {}
    while(j < s.length){
        if(!obj[s[j]]){
            obj[s[j]] = 1
            j++
            max = Math.max(max, Object.keys(obj).length)
        }
        else{
            delete obj[s[i]]
            i++
        }
    }
    return max
};