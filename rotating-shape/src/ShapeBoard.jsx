import { useEffect, useState } from "react";
import "./App.css"; // подключаем стили

export default function ShapeBoard() {
  const height = 4;
  const width = 4;

  const defaultBoard = Array(height)
    .fill(null)
    .map(() => Array(width).fill(false));

  const [board, setBoard] = useState(() => {
    const saved = localStorage.getItem("shape-board");
    try {
      return saved ? JSON.parse(saved) : defaultBoard;
    } catch (e) {
      console.error("Invalid JSON in localStorage:", e);
      localStorage.removeItem("shape-board");
      return defaultBoard;
    }
  });

  useEffect(() => {
    localStorage.setItem("shape-board", JSON.stringify(board));
  }, [board]);

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
    localStorage.removeItem("shape-board");
  }

  return (
    <div className="page">
      <h2 className="heading">Rotating Shape</h2>

      <div className="board-wrapper">
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
          <button className="btnRotate" onClick={handleRotateBtnClick}>
            Rotate
          </button>
          <button className="btnRestart" onClick={handleRestartClick}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
