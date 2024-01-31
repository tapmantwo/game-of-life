/*

RULES:
Any live cell with fewer than two live neighbours dies (referred to as underpopulation).
Any live cell with more than three live neighbours dies (referred to as overpopulation).
Any live cell with two or three live neighbours lives, unchanged, to the next generation.
Any dead cell with exactly three live neighbours comes to life.

*/

test('a live cell with zero live neighbours dies', () => {

    /*
        ... A [...]
        .X. B [.X.]
        ... C [...]
    */

    /*
        ...
        ...
        ...
    */

    const cells = [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]

    const nextCells = runNext(cells);

    expect(nextCells).toEqual([
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ])
})

test('a live cell with one live neighbours dies', () => {

    /*
        ... A [...]
        XX. B [XX.]
        ... C [...]
    */

    /*
        ...
        ...
        ...
    */

    const cells = [
        [0,0,0],
        [1,1,0],
        [0,0,0]
    ]

    const nextCells = runNext(cells);

    expect(nextCells).toEqual([
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ])
})

test('a live cell with two neighbours lives', () => {
    /*
        ...
        XXX
        ...
    */

    /*
        ...
        .X.
        ...
    */

        const cells = [
            [0,0,0],
            [1,1,1],
            [0,0,0]
        ]
    
        const nextCells = runNext(cells);
    
        expect(nextCells).toEqual([
            [0,1,0],
            [0,1,0],
            [0,1,0]
        ])
})

test('A live cell with three neighbours lives', () => {
    const cells = [
        [0,1,0],
        [1,1,1],
        [0,0,0]
    ]

    const nextCells = runNext(cells);

    expect(nextCells).toEqual([
        [1,1,1],
        [1,1,1],
        [0,1,0]
    ])
})

test('Any live cell with more than three live neighbours dies', () => {
    const cells = [
        [1,1,0],
        [1,1,1],
        [0,0,0]
    ]

    const nextCells = runNext(cells);

    expect(nextCells).toEqual([
        [1,0,1],
        [1,0,1],
        [0,1,0]
    ])
})

test('Any dead cell with exactly three live neighbours comes to life', () => {
    const cells = [
        [0,0,0],
        [1,1,1],
        [0,0,0]
    ]

    const nextCells = runNext(cells);

    expect(nextCells).toEqual([
        [0,1,0],
        [0,1,0],
        [0,1,0]
    ])
})

test('Big Grid', () => {
    const cells = [
        [0,0,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ]

    const nextCells = runNext(cells);

    expect(nextCells).toEqual([
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
    ])
})


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