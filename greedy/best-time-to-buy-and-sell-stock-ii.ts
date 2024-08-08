function maxProfit(prices: number[]): number {
    let minStack = []
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        let cur = prices[i]
        
        if(minStack.length == 0) {
            minStack.push(cur)
            continue;
        }

        if(cur < minStack[minStack.length - 1]) {
            minStack.push(cur)
        } else if(cur > minStack[minStack.length - 1]) {
            if(prices[i+1] && prices[i+1] > cur) continue;
            profit = profit + cur - minStack[minStack.length - 1]
            while(minStack.length > 0) minStack.pop()
        }
    }
    return profit
};
