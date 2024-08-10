function maximumUniqueSubarray(nums: number[]): number {
    let maxScore = 0
    let left = 0, right = 0
    let visited = {}
    let temp = 0

    while (right < nums.length) {
        let cur = nums[right]
        if (visited[cur]) {

            while (visited[cur]) {
                delete visited[nums[left]]
                temp = temp - nums[left]
                left++;
            }
        }
        visited[cur] = true;
        temp = temp + cur
        maxScore = Math.max(maxScore, temp);
        right++;
    }

    return maxScore;
};
