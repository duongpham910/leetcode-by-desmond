function maximumTripletValue(nums: number[]): number {
    let max = 0
    let prefix_max = {}
    let suffix_max = {}

    let stack = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < stack[stack.length - 1]) {
            prefix_max[i] = stack[stack.length - 1]
        } else {
            stack.push(nums[i])
        }
    }

    let stack1 = [nums[nums.length - 1]]
    for (let k = nums.length - 2; k >= 0; k--) {
        suffix_max[k] = stack1[stack1.length - 1]
        if (nums[k] > stack1[stack1.length - 1]) {
            stack1.push(nums[k])
        }
    }

    for (let j = 1; j < nums.length - 1; j++) {
        let cur = nums[j]
        if ((prefix_max[j] || prefix_max[j] === 0) && suffix_max[j] && ((prefix_max[j] - cur)*suffix_max[j] > max )) {
            max = (prefix_max[j] - cur)*suffix_max[j]
        }
    }

    if (max < 0) max = 0
    return max
};
