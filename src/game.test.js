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

test('a live cell with two or three neighbours lives', () => {
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
            [0,0,0],
            [0,1,0],
            [0,0,0]
        ])
})


const runNext = (cells) => {

    const countLiveNeighbours = (row, column) => {
        let count = 0
        if(cells[row - 1][column - 1] === 1) {
            count++
        }
        if(cells[row - 1][column] === 1) {
            count++
        }
        if(cells[row - 1][column + 1] === 1) {
            count++
        }
        if(cells[row][column - 1] === 1) {
            count++
        }
        if(cells[row][column + 1] === 1) {
            count++
        }
        if(cells[row + 1][column - 1] === 1) {
            count++
        }
        if(cells[row + 1][column] === 1) {
            count++
        }
        if(cells[row + 1][column + 1] === 1) {
            count++
        }
        return count
    }

    for (let row = 0; row < 3; row++) {
        for (let column = 0; row < 3; row++) {
            const cell = cells[row][column]
            const liveNeighbours = countLiveNeighbours(row, column)
            if(liveNeighbours = 0) {

            }
        }
    }

    return [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
}