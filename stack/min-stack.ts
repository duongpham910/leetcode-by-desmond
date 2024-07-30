class MinStack {
  currentStack

  constructor() {
      this.currentStack = new Set()
  }

  push(val: number): void {
      this.currentStack.add(val)
  }

  pop(): void {
      this.currentStack.pop()
  }

  top(): number {
      return this.currentStack[this.currentStack.length - 1]
  }

  getMin(): number {
      return Math.min( ...this.currentStack )
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/