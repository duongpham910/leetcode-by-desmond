function sumOfBeauties(nums: number[]): number {
    let max = 0
    let prefix_max = {}
    let suffix_min = {}
    let result = 0

    let stack = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= stack[stack.length - 1]) {
            prefix_max[i] = stack[stack.length - 1]
        } else {
            stack.push(nums[i])
        }
    }

    let stack1 = [nums[nums.length - 1]]
    for (let k = nums.length - 2; k >= 0; k--) {
        if (nums[k] >= stack1[stack1.length - 1]) {
            suffix_min[k] = stack1[stack1.length - 1]
        } else {
            stack1.push(nums[k])
        }
    }


    for (let i = 1; i <= nums.length - 2; i++) {
        if((!prefix_max[i] || (prefix_max[i] < nums[i])) && (!suffix_min[i] || (nums[i] < suffix_min[i]))) {
            result = result + 2
        } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
            result = result + 1
        }
    }

    return result
};
