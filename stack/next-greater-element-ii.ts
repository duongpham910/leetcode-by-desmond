function nextGreaterElements(nums: number[]): number[] {
    let stack: number[][] = []
    let result: number[] = Array(nums.length).fill(-1);
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        while (stack.length != 0 && cur > stack[stack.length - 1][0]) {
            let val = stack.pop()
            result[val[1]] = cur
        }
        stack.push([cur, i])
    }

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        while (stack.length != 0 && cur > stack[stack.length - 1][0]) {
            let val = stack.pop()
            result[val[1]] = cur
        }
        stack.push([cur, i])
    }

    return result
};
