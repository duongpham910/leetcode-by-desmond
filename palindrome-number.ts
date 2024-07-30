function isPalindrome(x: number): boolean {
    let reverseX = x.toString().split("").reverse().join("");
    return reverseX == x.toString()
};
