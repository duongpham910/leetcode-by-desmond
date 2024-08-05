let result: number[][] = [[]]
let tempArr: number[] = []
function subsets(nums: number[]): number[][] {
    result = [[]]
    tempArr = []
    nums.sort((a, b) => { return a - b })
    for (let i = 0; i < nums.length; i++) {
        tempArr.push(nums[i])
        backtrack(nums.slice(i + 1, nums.length))
        tempArr.pop()
    }
    return result
};

function backtrack(candidates: number[]) {
    result.push([...tempArr])

    if (candidates.length == 0) return

    for (let i = 0; i < candidates.length; i++) {
        tempArr.push(candidates[i])
        backtrack(candidates.slice(i + 1, candidates.length))
        tempArr.pop()
    }
}