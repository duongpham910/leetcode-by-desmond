function topKFrequentWord(words: string[], k: number): string[] {

    let mapObj = new Map();
    let result: string[][] = []

    for(let i = 0; i < words.length; i++){
        if(mapObj.has(words[i])) {
            mapObj.set(words[i], mapObj.get(words[i]) + 1)
        } else {
            mapObj.set(words[i], 1)
        }
    }
    
    // Convert Map to an array of [key, value] pairs
    let mapEntriesArray = Array.from(mapObj.entries());

    // Sort the array based on the values
    result = mapEntriesArray.sort((a, b) => {
        if (b[1] > a[1]) return 1
        if (b[1] == a[1]) {
            if (b[0] > a[0]) return -1
            return 0
        }
        return -1
    }).slice(0, k);


    return result.map(item => item[0])
};
