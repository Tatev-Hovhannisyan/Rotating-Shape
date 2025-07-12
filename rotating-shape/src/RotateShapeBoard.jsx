import { useState } from "react";

export default function RotateShapeBoard({ onBack }) {
  const height = 4;
  const width = 4;

  const defaultBoard = Array(height)
    .fill(null)
    .map(() => Array(width).fill(false));

  const [board, setBoard] = useState(defaultBoard);

  function handleOnBoardClick(i, j) {
    const newBoard = board.map((row, rowIndex) =>
      row.map((cell, cellIndex) =>
        rowIndex === i && cellIndex === j ? !cell : cell
      )
    );
    setBoard(newBoard);
  }

  function handleRotateBtnClick() {
    const height = board.length;
    const width = board[0].length;
    const newBoard = Array(width)
      .fill(null)
      .map(() => Array(height).fill(false));

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        newBoard[j][height - 1 - i] = board[i][j];
      }
    }

    setBoard(newBoard);
  }

  function handleRestartClick() {
    setBoard(defaultBoard);
  }

  return (
    <>
      <div className="container">
        {board.map((row, i) => (
          <div className="row" key={i}>
            {row.map((cell, j) => (
              <div
                key={j}
                onClick={() => handleOnBoardClick(i, j)}
                className={`cell ${cell ? "marked" : ""}`}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="btnRotate" onClick={handleRotateBtnClick}>Rotate</button>
        <button className="btnRestart" onClick={handleRestartClick}>Restart</button>
        <button className="btnBack" onClick={onBack}>Back</button>
      </div>
    </>
  );
}
