function removeElement(nums: number[], val: number): number {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        if (cur == val) arr.push(i)
    }
    for (let j = 0; j < arr.length; j++) {
        let cur = arr[j]
        nums.splice(arr[j] - j, 1)
    }
    return nums.length
};
