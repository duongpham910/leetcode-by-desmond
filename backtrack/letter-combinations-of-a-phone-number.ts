function letterCombinations(digits: string): string[] {
    let keyboard = {
        '2': ['a', 'b' ,'c'],
        '3': ['d', 'e' ,'f'],
        '4': ['g', 'h' ,'i'],
        '5': ['j', 'k' ,'l'],
        '6': ['m', 'n' ,'o'],
        '7': ['p', 'q' ,'r', 's'],
        '8': ['t', 'u' ,'v'],
        '9': ['w', 'x' ,'y', 'z'],
    }

    let arr = digits.split('')

    if (arr.length == 0) return []
    if (arr.length == 1) return keyboard[arr[0]]

    
    let result : string[]= []
    for(let i = 0; i < arr.length; i++) {
        if (keyboard[arr[i]]) {
            let kbArray = keyboard[arr[i]]
            let tempResult: string[] = []

            if (result.length == 0) tempResult = kbArray
            
            
            for (let j = 0; j < result.length; j++) {
                for (let k = 0; k < kbArray.length; k++) {
                    tempResult.push(result[j] + kbArray[k])
                }
            }
            result = tempResult
        }
    }
    return result
};
