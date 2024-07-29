function isValidSudoku(board: string[][]): boolean {
    let visitedRow = {
        '0': [],
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': []
    }
    let visitedCol = {
        '0': [],
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': []
    }
    let visitedBox = {
        '00': [],
        '01': [],
        '02': [],
        '10': [],
        '11': [],
        '12': [],
        '20': [],
        '21': [],
        '22': [],
    }

    for (let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            let digit = board[r][c]
            if(digit == '.') continue;

            if (visitedRow[r.toString()].includes(digit) || 
                visitedCol[c.toString()].includes(digit) ||
                visitedBox[`${Math.floor(r / 3)}${Math.floor(c / 3)}`].includes(digit)) {

                return false
            } else {
                visitedRow[r.toString()].push(digit)
                visitedCol[c.toString()].push(digit)
                visitedBox[`${Math.floor(r / 3)}${Math.floor(c / 3)}`].push(digit)
            }
        }
    }
    return true
};
