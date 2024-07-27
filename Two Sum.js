function twoSum(nums: number[], target: number): number[] {
    let result = []
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let j = 0; j < nums.length; j++) {
        let nextNumber = target - nums[j]
        if (map[nextNumber] && j != map[nextNumber]) {
            result[0] = j
            result[1] = map[nextNumber]
            break;
        }
    }
    return result
};
