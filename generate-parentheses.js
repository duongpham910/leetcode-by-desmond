let stack = []
let res = []
function generateParenthesis(n: number): string[] {
    stack = []
    res = []
    backtrack(0, 0, n)
    return res
};

function backtrack(openN: number, closeN: number, n: number){
    if (openN == closeN && openN == n && closeN == n){
        res.push(stack.join(''))
        return
    }

    if (openN < n) {
        stack.push('(')
        backtrack(openN + 1, closeN, n)
        stack.pop()
    }

    if(closeN < openN) {
        stack.push(')')
        backtrack(openN, closeN + 1, n)
        stack.pop()
    }
}
