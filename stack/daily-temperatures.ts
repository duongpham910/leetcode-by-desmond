function dailyTemperatures(temperatures: number[]): number[] {
    let stack: number[] = []
    let result: number[] = Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++){
        let cur = temperatures[i]
        while(stack.length != 0 && cur > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop()
            if(index) result[index] = i - index
        }
        stack.push(i)
    }
    return result
};
