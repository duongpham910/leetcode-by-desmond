/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s: string) {
    let chars: string[] = s.split("")
    let stack: string[] = []
    let openBracket = ''
    let correctPair = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    let openBrackets = ['{', '(', '[']
    let result = true
    chars.forEach(char => {
        if (openBrackets.includes(char)) {
            stack.push(char)
        } else {
            openBracket = stack.pop() || ''
            if (correctPair[openBracket] !== char) result = false
        }
    })

    if (stack.length > 0) result = false
    return result
};
