function longestPalindromeSubseq(s: string): number {
    let arr1 = s.split('')
    let arr2 = s.split('').reverse()

    let twoDimension = new Array(arr1.length + 1)

    for (let i = 0; i < twoDimension.length; i++) {
        twoDimension[i] = new Array(arr2.length + 1).fill(0)
    }

    for(let i = 0; i < twoDimension.length; i++) {
        for (let j = 0; j < twoDimension[i].length; j++) {
            if (i == 0 || j == 0 ) {
                twoDimension[i][j] = 0
            } else if(arr1[i - 1] == arr2[j - 1]){
                twoDimension[i][j] = 1 + twoDimension[i-1][j -1]
            } else if(arr1[i - 1] != arr2[j - 1]){
                twoDimension[i][j] = Math.max(twoDimension[i-1][j], twoDimension[i][j - 1])
            }

        }
    }

    return twoDimension[arr1.length][arr2.length]
};
