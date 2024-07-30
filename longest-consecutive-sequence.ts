function longestConsecutive(nums: number[]): number {
    nums.sort(compareNumbers)

    let count = 1
    let maxCount = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i+1] - 1) {
            count++
        } else if(nums[i] == nums[i+1]){
            continue
        } else {
            if(count > maxCount) maxCount = count
            count = 1
        }
    }
    return maxCount
};

function compareNumbers(a, b) {
    return a - b;
}
