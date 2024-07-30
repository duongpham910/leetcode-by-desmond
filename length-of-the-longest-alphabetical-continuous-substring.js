function longestContinuousSubstring(s: string): number {
    const strings = s.split('')

    let count = 1
    let maxCount = 0
    for(let i = 0; i < strings.length; i++) {
        if(strings[i+1] && (strings[i].charCodeAt(0) == strings[i+1].charCodeAt(0) - 1)) {
            count++
        } else  {
            if(count > maxCount) maxCount = count
            count = 1
        }
    }
    return maxCount
};
