function characterReplacement(s: string, k: number): number {
    let maxLength = 0;
    let count = new Array(256).fill(0);
    let str = s.split('')

    let r = 0
    for (let l = 0; l < str.length; l++) {
        count[s.charCodeAt(l)]++
        let maxcount = Math.max(...count)

        while((l - r + 1) - maxcount > k) {
            count[s.charCodeAt(r)]--
            r++
        }

        maxLength = Math.max(maxLength, (l - r + 1))
    }


    return maxLength;
};
