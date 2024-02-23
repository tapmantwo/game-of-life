const runNext = require('./game');

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
