function threeSum(nums: number[]): number[][] {
    let final: number[][] = []
    nums = nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue

        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            if (nums[l] + nums[r] + nums[i] == 0) {
                final.push([nums[i], nums[l], nums[r]])
                l++
                while(nums[l] == nums[l - 1] && l < r) l++
            } else if (nums[l] + nums[r] + nums[i] > 0) {
                r--
            } else if (nums[l] + nums[r] + nums[i] < 0) {
                l++
            }

        }
    }

    return final
};
