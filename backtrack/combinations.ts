let result: number[][] = []
let tempArr: number[] = []
function combine(n: number, k: number): number[][] {
    result = []
    tempArr = []
    let arr = Array.from({ length: n }, (_, i) => i + 1);

    for (let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i])
        backtrack(tempArr.length, arr.slice(i + 1, arr.length), k)
        tempArr.pop()
    }

    return result
};

function backtrack(length: number, candidates: number[], target: number) {
    if (length === target) {
        result.push([...tempArr])
        return
    }

    if (length > target) return

    for (let i = 0; i < candidates.length; i++) {
        tempArr.push(candidates[i])
        backtrack(tempArr.length, candidates.slice(i + 1, candidates.length), target)
        tempArr.pop()
    }
}
