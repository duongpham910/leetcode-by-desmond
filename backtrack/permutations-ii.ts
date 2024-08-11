let tempArr: number[] = []
let resulrArr: number[][] = []

function permuteUnique(nums: number[]): number[][] {
    resulrArr = []
    let visited = {}
    for(let i = 0; i < nums.length; i++) {
        let copy = nums.slice();
        let number = copy.splice(i, 1)
        tempArr = [number[0]]
        backtracking(copy, visited)
    }
    return resulrArr
};

function backtracking(arr: number[], visited) {
    if(arr.length == 0 && !visited[[...tempArr].join('')]) {
        resulrArr.push([...tempArr])
        visited[[...tempArr].join('')] = true
        return
    }

    let i = 0
    while(i < arr.length) {
        let copy = arr.slice();
        let number = copy.splice(i, 1)
        tempArr.push(number[0])
        backtracking(copy, visited)
        tempArr.pop()
        i++
    }
}
