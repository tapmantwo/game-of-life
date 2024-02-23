const runNext = (cells) => {

    const gridDimension = cells.length;

    const isCellAlive = (row, column) => {
        if (row < 0) return false
        if (row >= gridDimension) return false
        if (column < 0) return false
        if (column >= gridDimension) return false
        
        return cells[row][column] === 1
    }

    const countLiveNeighbours = (row, column) => {
        let count = 0
        if(isCellAlive(row - 1,column - 1)) {
            count++
        }
        if(isCellAlive(row - 1, column)) {
            count++
        }
        if(isCellAlive(row - 1,column + 1)) {
            count++
        }
        if(isCellAlive(row,column - 1)) {
            count++
        }
        if(isCellAlive(row,column + 1)) {
            count++
        }
        if(isCellAlive(row + 1,column - 1)) {
            count++
        }
        if(isCellAlive(row + 1,column)) {
            count++
        }
        if(isCellAlive(row + 1,column + 1)) {
            count++
        }
        return count

        // let count = 0;
        // for(let i = -1; i <= 1; i++) {
        //     for (let n = -1; n <= 1; n++) {
        //         if ( i === 0 && n === 0) continue;

        //         if (isCellAlive(row + i, column + n)) {
        //             count++;
        //         }
        //     }
        // }

        // return count;
    }

    const nextCells = [];
    for (let i = 0; i < gridDimension; i++) {
        const row = Array(gridDimension).fill(0, 0, gridDimension)
        nextCells.push(row);
    }

    for (let row = 0; row < gridDimension; row++) {
        for (let column = 0; column < gridDimension; column++) {
            const cell = cells[row][column]
            const liveNeighbours = countLiveNeighbours(row, column)
            if(cell === 1 && liveNeighbours < 2) {
                nextCells[row][column] = 0
            }
            if (cell === 1 && liveNeighbours === 2) {
                nextCells[row][column] = 1
            }
            if (cell === 1 && liveNeighbours === 3) {
                nextCells[row][column] = 1
            }
            if (cell === 0 && liveNeighbours === 3) {
                nextCells[row][column] = 1
            }
        }
    }

    return nextCells
}

module.exports = runNext;