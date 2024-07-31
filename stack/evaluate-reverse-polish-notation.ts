function evalRPN(tokens: string[]): number {
    let stackNumber: number[] = []
    let n1 = 0
    let n2 = 0
    for(let i = 0; i < tokens.length; i++) {
        let cur = tokens[i]
        switch(cur) {
            case "+":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                stackNumber.push(n2 + n1)
                break;
            case "-":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                stackNumber.push(n2 - n1)
                break;
            case "*":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                stackNumber.push(n2 * n1)
                break;
            case "/":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                stackNumber.push(Math.trunc(n2 / n1))
                break;
            default:
                stackNumber.push(parseInt(cur))
        }
    }
    return stackNumber[0]
};
