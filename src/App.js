import Keyboard1 from "./Components/Keyboard/Keyboard1.js";
import Keyboard2 from "./Components/Keyboard/Keyboard2.js";
import Keyboard3 from "./Components/Keyboard/Keyboard3.js";
import Key from "./Components/Keyboard/Keys.js";
import Grid from "./Components/Grid/Grid.js";
import { useState, handleClick } from "react";
import "./Components/Keyboard/keyboard.css";


const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];



//install uuid
//3 states with 3 different colors

function App() {

  const [keysOne] = useState(keys1);
  const [keysTwo] = useState(keys2);
  const [keysThree] = useState(keys3);

  return (
    <div>
      <nav className="header">
        <h1 className="wordle">WORDLE</h1>
      </nav>
      <Grid></Grid>
      <div className="Keyboard">
        <div>
          <Keyboard1 keys1={keysOne} selectLetter={() => console.log("hello1")}>
            <Key onClick={() => handleClick(keys1)}>{keys1}</Key>
          </Keyboard1>
        </div>
        <div>
          <Keyboard2 keys2={keysTwo} selectLetter={() => console.log("hello2")}>
            <Key onClick={() => handleClick(keys2)}>{keys2}</Key>
          </Keyboard2>
        </div>
        <div>
          <Keyboard3 keys3={keysThree} selectLetter={() => console.log("hello3")}>
            <Key onClick={() => handleClick(keys3)}>{keys3}</Key>
          </Keyboard3>
        </div>
      </div>
    </div>
  );
}

export default App;
