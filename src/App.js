import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const winningCombinations = [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    for (let combination of winningCombinations) {
      if (combination[0] && combination[0] === combination[1] && combination[0] === combination[2]) {
        return combination[0];
      }
    }

    return null;
  };

  const handleClick = (row, col) => {
    if (!board[row][col] && !winner) {
      const newBoard = board.map((r, rowIndex) =>
        r.map((c, colIndex) => (rowIndex === row && colIndex === col ? currentPlayer : c))
      );
      setBoard(newBoard);
      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      {winner ? <h2>PLAYER {winner === 'X' ? '1' : '2'} WON!</h2> : null}
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === 'X' ? 'black' : cell === 'O' ? 'green' : ''}`}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell === 'X' ? '✖' : cell === 'O' ? '✔' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      <br />
      <button className="reset-button" onClick={resetGame}>RESET</button>
    </div>
  );
};

export default App;
