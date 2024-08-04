let result: number[][] = []
let tempArr: number[] = []
function combinationSum(candidates: number[], target: number): number[][] {
    result = []
    tempArr = []
    candidates.sort((a, b) => { return a - b })
    for (let i = 0; i < candidates.length; i++) {
        tempArr.push(candidates[i])
        backtrack(candidates[i], candidates.slice(i, candidates.length), target)
        tempArr.pop()
    }
    return result
};

function backtrack(sum: number, candidates: number[], target: number) {

    if (sum === target) {
        result.push([...tempArr])
        return
    }

    if (sum > target) {
        return
    }
    for (let i = 0; i < candidates.length; i++) {
        tempArr.push(candidates[i])
        backtrack(candidates[i] + sum, candidates.slice(i, candidates.length), target)
        tempArr.pop()
    }
}
