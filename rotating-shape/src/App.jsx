import { useState } from "react";
import RotateShapeBoard from "./RotateShapeBoard";
import RotateShape from "./RotateShape";
import "./App.css";


function App() {
  const [activePage, setActivePage] = useState(null);

  return (
    <div className="page-wrapper">
      {activePage === null && (
        <>
          <h2 className="heading">Let's try to rotate the shape !!!</h2>
          <p className="description">
            Here you can try two ways to rotate shapes — separately or on the
            board
          </p>
          <div className="menu-wrapper">
            <button
              className="btnRotate"
              onClick={() => setActivePage("shape")}
            >
              Show RotateShape
            </button>
            <button
              className="btnRestart"
              onClick={() => setActivePage("board")}
            >
              Show RotateShapeBoard
            </button>
          </div>
        </>
      )}

      {activePage === "shape" && (
        <RotateShape onBack={() => setActivePage(null)} />
      )}
      {activePage === "board" && (
        <RotateShapeBoard onBack={() => setActivePage(null)} />
      )}
    </div>
  );
}

export default App;
