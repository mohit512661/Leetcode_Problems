
//<------------------------------O(n) time complexity--------------------------------->

var convert = function (s, numRows) {
    let arr = []
    for (let i = 0; i < numRows; i++) {
        arr[i] = []
    }

    let start = 0
    let top = false
    let n = 0

    while (start < s.length) {
        if (!top) {
            if (n == numRows - 1) {
                arr[n].push(s[start++])
                top = !top
            }
            else {
                arr[n++].push(s[start++])
            }
        }
        else {
            n--
            // n == -1 is just to handle case when rows is equal to 1 then n will go less than 0 
            // but instead of this we can return s if rows is equal to 1 at the top in the function 
            if (n == -1) {
                n++
                arr[n].push(s[start++])
            }
            else if (n == 0) {
                top = !top
            }
            else {
                arr[n].push(s[start++])
            }
        }
    }


    return arr.flat(Infinity).join("")
};

//<--------------------------------------------------------------------------------->