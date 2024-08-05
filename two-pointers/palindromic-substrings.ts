function countSubstrings(s: string): number {
    let arrS = s.split('')
    let l = 0
    let r = 0
    let result = 0
    for (let i = 0; i < arrS.length; i++) {
        l = i
        r = i
        while (l >= 0 && r < arrS.length && arrS[l] == arrS[r]) {
            result++
            l--
            r++
        }

        l = i
        r = i + 1
        while (l >= 0 && r < arrS.length && arrS[l] == arrS[r]) {
            result++
            l--
            r++
        }
    }
    return result
};
