function findAnagrams(s: string, p: string): number[] {
    let arrS = s.split('')
    let arrP = p.split('')
    let result: number[] = []
    let sortedP = freqString(p)

    for(let i = 0 ;i <= arrS.length - arrP.length; i++) {
        let cur = s.slice(i, i + arrP.length)
        if(freqString(cur) == sortedP) result.push(i)
    }
    return result
};

let MAX_CHAR = 26;

function freqString(str) {
    let result = ''

    // Hash array to keep count of characters.
    let letters = new Array(MAX_CHAR);
    for (let i = 0; i < MAX_CHAR; i++) {
        letters[i] = 0;
    }

    // Traverse string and increment
    // count of characters
    for (let x = 0; x < str.length; x++) {
        // 'a'-'a' will be 0, 'b'-'a' will be 1,
        // so for location of character in count
        // array we will do str[i]-'a'.
        letters[str[x].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return letters.join('')
   
}
