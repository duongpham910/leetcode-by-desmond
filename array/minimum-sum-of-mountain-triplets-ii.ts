function minimumSum(nums: number[]): number {
    let min = 999999999
    let prefix_min = {}
    let suffix_min = {}

    let stack = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > stack[stack.length - 1]) {
            prefix_min[i] = stack[stack.length - 1]
        } else {
            stack.push(nums[i])
        }
    }

    let stack1 = [nums[nums.length - 1]]
    for (let k = nums.length - 2; k >= 0; k--) {
        if (nums[k] > stack1[stack1.length - 1]) {
            suffix_min[k] = stack1[stack1.length - 1]
        } else {
            stack1.push(nums[k])
        }
    }

    for (let j = 1; j < nums.length - 1; j++) {
        let cur = nums[j]
        if ((prefix_min[j] || prefix_min[j] === 0) && suffix_min[j] && (cur + prefix_min[j] + suffix_min[j] < min)) {
            min = cur + prefix_min[j] + suffix_min[j]
        }
    }

    if (min == 999999999) min = -1
    return min
};
