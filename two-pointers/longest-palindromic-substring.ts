function longestPalindrome(s: string): string {
    let arrS = s.split('')
    let l = 0
    let r = 0
    let max = 0
    let maxl = 0
    let maxr = 0
    for (let i = 0; i < arrS.length; i++) {
        l = i
        r = i
        while (l >= 0 && r < arrS.length && arrS[l] == arrS[r]) {
            if(r -l > max) {
                max = r - l
                maxl = l
                maxr = r
            }
            l--
            r++
        }

        l = i
        r = i + 1
        while (l >= 0 && r < arrS.length && arrS[l] == arrS[r]) {
            if(r - l > max) {
                max = r - l
                maxl = l
                maxr = r
            }
            l--
            r++
        }
    }

    return s.slice(maxl,maxr+1)
};
