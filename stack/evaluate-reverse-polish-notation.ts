function evalRPN(tokens: string[]): number {
    let stackNumber: number[] = []
    let n1: number | undefined = 0
    let n2: number | undefined = 0
    for(let i = 0; i < tokens.length; i++) {
        let cur = tokens[i]
        switch(cur) {
            case "+":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                if(n1 && n2) stackNumber.push(n2 + n1)
                break;
            case "-":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                if(n1 && n2) stackNumber.push(n2 - n1)
                break;
            case "*":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                if(n1 && n2) stackNumber.push(n2 * n1)
                break;
            case "/":
                n1 = stackNumber.pop()
                n2 = stackNumber.pop()
                if(n1 && n2) stackNumber.push(Math.trunc(n2 / n1))
                break;
            default:
                stackNumber.push(parseInt(cur))
        }
    }
    return stackNumber[0]
};
