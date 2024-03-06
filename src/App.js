import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
const runNext = require('./game');


//show grid
//show dead or alive
//button to move to next version of grid

const createEmptyGrid = (width, height) => {
  const emptyGrid = [];
  for (let i = 0; i < height; i++) {
      const row = Array(width).fill(0, 0, width)
      emptyGrid.push(row);
  }
  return emptyGrid
}

function Grid({width, height}) {

  
  const [game, setGame] = useState(createEmptyGrid(width, height))
  const [running, setRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(undefined)

  const toggle = (rowIndex, columnIndex) => {
    const current = game[rowIndex][columnIndex]
    const newCell = current === 1 ? 0 : 1;
    console.log({rowIndex, columnIndex, newCell, current})
    const newGame = [
      ...game
    ]
    newGame[rowIndex][columnIndex] = newCell

    setGame(newGame)
  }

  const next = () => {
    const newGrid = runNext(game)
    setGame(newGrid)
  }

  const reset = () => {
    setGame(createEmptyGrid(width,height))
  }

  const toggleRun = () => {
    setRunning(!running)
  }

  // if ( running && !intervalId ) {
  //   const newIntervalId = setInterval(next, 250)
  //   console.log('Set interval', newIntervalId)
  //   setIntervalId(newIntervalId);
  // } else if (intervalId) {
  //   console.log('Clearing interval', intervalId)
  //   clearInterval(intervalId)
  //   setIntervalId(undefined);
  // }

  if (running) {
    setTimeout(next, 250)
  }

//const myInterval = setInterval(myFunction, 1000);
// To stop execution:
// clearInterval(myInterval);


  return (
    <>
    <button onClick={next}>Next</button>
    <button onClick={reset}>Reset</button>
    <button onClick={toggleRun}>{running ? "Stop" : "Run"}</button>
    <div className='grid'>
    {game.map((row, rowIndex) => {
        return (
        <div key={rowIndex} className='row'>
          {row.map((cell, columnIndex) => {
            return (
            <div key={columnIndex} className='cell'>
              <div onClick={() => toggle(rowIndex, columnIndex)} className={`cell_${cell}`}/>
            </div>
            )
          })}

        </div>
        )
    })}
    </div>
    </>
    
  )
}

function App() {
  return (
    <div className="App">
      <Grid width={25} height={25}/>
    </div>
  );
}

export default App;
