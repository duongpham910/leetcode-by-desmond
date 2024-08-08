function maxProfit(prices: number[]): number {
    let stack = [prices[0]]
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        let cur = prices[i]
        if (cur < stack[stack.length - 1]) {
            stack.push(cur)
        } else if (cur > stack[stack.length - 1] && cur - stack[stack.length - 1] > maxProfit) {
            maxProfit = cur - stack[stack.length - 1]
        }
    }

    return maxProfit
};
