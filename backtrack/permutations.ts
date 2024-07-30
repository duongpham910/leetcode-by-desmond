let tempArr: number[] = []
let resulrArr: number[][] = []

function permute(nums: number[]): number[][] {
    resulrArr = []
    for(let i = 0; i < nums.length; i++) {
        let copy = nums.slice();
        let number = copy.splice(i, 1)
        tempArr = [number[0]]
        backtracking(copy)
    }
    return resulrArr
};

function backtracking(arr: number[]) {
    if(arr.length == 0) {
        resulrArr.push([...tempArr])
        return
    }

    let i = 0
    while(i < arr.length) {
        let copy = arr.slice();
        let number = copy.splice(i, 1)
        tempArr.push(number[0])
        backtracking(copy)
        tempArr.pop()
        i++
    }
}
