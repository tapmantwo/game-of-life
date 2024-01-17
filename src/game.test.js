/*

RULES:
Any live cell with fewer than two live neighbours dies (referred to as underpopulation).
Any live cell with more than three live neighbours dies (referred to as overpopulation).
Any live cell with two or three live neighbours lives, unchanged, to the next generation.
Any dead cell with exactly three live neighbours comes to life.

*/

test('a live cell with zero live neighbour dies', () => {

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
    return [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
}