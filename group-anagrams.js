function groupAnagrams(strs: string[]): string[][] {
    let sortedObj = {}

    for(let i = 0; i < strs.length; i++){
        let str = strs[i]
        let sortedStr = sortString(strs[i])
        if(sortedObj[sortedStr]) {
            sortedObj[sortedStr].push(str)
        } else {
            sortedObj[sortedStr] = [str]
        }
    }

    return Object.values(sortedObj)
};

let MAX_CHAR = 26;
 
function sortString(str) {
    let result = ''
    
    // Hash array to keep count of characters.
    let letters = new Array(MAX_CHAR);
    for(let i = 0; i < MAX_CHAR; i++) {
        letters[i]=0;
    }
     
    // Traverse string and increment
    // count of characters
    for(let x=0;x<str.length;x++) {
        // 'a'-'a' will be 0, 'b'-'a' will be 1,
        // so for location of character in count
        // array we will do str[i]-'a'.
        letters[str[x].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Traverse the hash array and print
    // characters
    for (let i = 0; i < MAX_CHAR; i++) {
        for (let j = 0; j < letters[i]; j++) {
            result = result + String.fromCharCode(i + 'a'.charCodeAt(0))
        }
    }

    return result
}
