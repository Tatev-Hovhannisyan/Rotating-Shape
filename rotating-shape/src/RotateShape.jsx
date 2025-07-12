import { useState } from "react";
import { getRandomShape } from "./Shapes";

function rotateMatrix(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;

  const rotated = Array(width)
    .fill(null)
    .map(() => Array(height).fill(false));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      rotated[j][height - 1 - i] = matrix[i][j];
    }
  }

  return rotated;
}

export default function RotateShape({ onBack }) {
  const [shapeData, setShapeData] = useState(getRandomShape());

  function handleRotate() {
    const rotatedShape = rotateMatrix(shapeData.shape);
    setShapeData({ ...shapeData, shape: rotatedShape });
  }

  function handleRestart() {
    setShapeData(getRandomShape());
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Figure: {shapeData.name}</h2>

      <div className="container">
        {shapeData.shape.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div
                key={j}
                className={`cell${cell ? " marked" : ""}`}
                style={cell ? { backgroundColor: shapeData.color } : undefined}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="btnRotate" onClick={handleRotate}>Rotate</button>
        <button className="btnRestart" onClick={handleRestart}>Restart</button>
        <button className="btnBack" onClick={onBack}>Back</button>
      </div>
    </div>
  );
}
