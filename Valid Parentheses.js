/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var chars = s.split("")
    var stack = []
    var openBracket = ''
    var correctPair = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    var openBrackets = ['{', '(', '[']
    var result = true
    chars.forEach(char => {
        if (openBrackets.includes(char)) {
            stack.push(char)
        } else {
            openBracket = stack.pop()
            if (correctPair[openBracket] !== char) result = false
        }
    })

    if (stack.length > 0) result = false
    return result
};
