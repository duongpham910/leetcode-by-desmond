function removeDuplicates(nums: number[]): number {
    let visited = {}
    let newArr = []
    for(let i = 0; i < nums.length; i++) {
        if(!visited[nums[i]])  {
            visited[nums[i]] = true
            newArr.push(nums[i])
        }
    }
    nums = newArr
    return newArr.length
};
