function topKFrequentElement(nums: number[], k: number): number[] {
    if(nums.length == k) return nums

    let mapObj = new Map();
    let result: number[] = []
    for(let i = 0; i < nums.length; i++){
        if(mapObj.has(nums[i])) {
            mapObj.set(nums[i], mapObj.get(nums[i]) + 1)
        } else {
            mapObj.set(nums[i], 1)
        }
    }
    
    // Convert Map to an array of [key, value] pairs
    let mapEntriesArray = Array.from(mapObj.entries());

    // Sort the array based on the values
    mapEntriesArray.sort((a, b) => b[1] - a[1]);

    // Extract the keys from the sorted array
    let sortedKeys = mapEntriesArray.map(entry => entry[0]);
    for (let i = 0; i < k; i++){
        result.push(sortedKeys[i])
    } 
    return result
};
