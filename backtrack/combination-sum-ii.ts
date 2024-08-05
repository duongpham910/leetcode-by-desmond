let result: number[][] = []
let tempArr: number[] = []
function combinationSum2(candidates: number[], target: number): number[][] {
    result = []
    tempArr = []
    candidates.sort((a, b) => { return a - b })
    for (let i = 0; i < candidates.length; i++) {
        if(i > 0 && candidates[i] == candidates[i-1]) continue;
        tempArr.push(candidates[i])
        backtrack(candidates[i], candidates.slice(i + 1, candidates.length), target)
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
        if(i > 0 && candidates[i] == candidates[i-1]) continue;
        tempArr.push(candidates[i])
        backtrack(candidates[i] + sum, candidates.slice(i + 1, candidates.length), target)
        tempArr.pop()
    }
}
