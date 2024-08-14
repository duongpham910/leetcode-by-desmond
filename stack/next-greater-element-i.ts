function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack: number[] = []
    let result: number[] = Array(nums1.length).fill(-1);
    let obj = {}
    for (let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = i
    }

    for (let i = 0; i < nums2.length; i++) {
        let cur = nums2[i]
        while (stack.length != 0 && cur > stack[stack.length - 1]) {
            let val = stack.pop()
            if(val) result[obj[val]] = cur
        }
        if (nums1.includes(cur)) stack.push(cur)
    }

    return result
};
