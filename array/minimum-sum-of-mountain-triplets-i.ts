function minimumSum(nums: number[]): number {
    let min = 999999

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]

        for (let l = i + 1; l < nums.length; l++) {
            let r = nums.length - 1
            while (l < r) {
                if (nums[i] < nums[l] && nums[r] < nums[l] && (nums[i] + nums[r] + nums[l] < min)) {
                    min = nums[i] + nums[r] + nums[l]
                }
                r--
            }
        }
    }

    if (min == 999999) min = -1
    return min
};
