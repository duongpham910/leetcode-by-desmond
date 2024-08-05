function longestValidParentheses(s: string): number {
    let stack: number[] = []
    let binaryArr: number[] = []
    let sArr = s.split('')
    for (let i = 0; i < sArr.length; i++) {
        let cur = sArr[i]
        if (cur == '(') {
            binaryArr.push(0)
            stack.push(i)
        }

        if (cur == ')') {
            if (stack.length != 0) {
                let ind = stack.pop()
                binaryArr[ind] = 1
                binaryArr.push(1)
            } else {
                binaryArr.push(0)
            }
        }
    }

    let count = 0
    let max = 0
    for (let j = 0; j < binaryArr.length; j++) {
        let cur = binaryArr[j]
        if (cur == 1) count++
        if (cur == 0) count = 0
        if (count > max) max = count
    }
    return max
};
