class StockSpanner {
    stack
    constructor() {
        this.stack = []
    }

    next(price: number): number {
        let span = 1
        while(this.stack.length != 0 && price >= this.stack[this.stack.length - 1][0]){
            span += this.stack.pop()[1]
        }
        this.stack.push([price, span])
        return span
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */