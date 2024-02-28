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

// return (
//   <>
//   {applicants.map(function(applicant) {
//     return (
//       <div key={applicant.id}>
//         <p>Applicant Name: {applicant.name}</p>
//         <p>Applicant location: {applicant.location}</p>
//         <p>Hackathons participated: {applicant.hackathons}</p>

//       </div>
//     )
//   })}
//   </>

function Grid({width, height}) {

  
  const [game, setGame] = useState(createEmptyGrid(width, height))
  console.log('game', game)

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

  return (
    <>
    <button onClick={next}>Next</button>
    <div className='grid'>
    {game.map((row, rowIndex) => {
        return (
        <div key={rowIndex} className='row'>
          {row.map((cell, columnIndex) => {
            return (
            <div key={columnIndex} className='cell'>
              <button onClick={() => toggle(rowIndex, columnIndex)} className={`cell_${cell}`}>{cell}</button>
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
      <Grid width={50} height={50}/>
    </div>
  );
}

export default App;
