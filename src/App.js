import { useState } from "react";
import "./App.css";
import Keyboard1 from "./Components/Keyboard/Keyboard1.js";
import Keyboard2 from "./Components/Keyboard/Keyboard2.js";
import Keyboard3 from "./Components/Keyboard/Keyboard3.js";
import Key from "./Components/Keyboard/Keys.js";
import RowOne from "./Components/Grid/Rows/RowOne.js";
import RowTwo from "./Components/Grid/Rows/RowTwo.js";
import RowThree from "./Components/Grid/Rows/RowThree.js";
import RowFour from "./Components/Grid/Rows/RowFour.js";
import RowFive from "./Components/Grid/Rows/RowFive.js";
import RowSix from "./Components/Grid/Rows/RowSix.js";
import Help from "./Components/helpBar/Help";
import "./Components/Keyboard/keyboard.css";




const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];

const row1 = ["", "", "", "", ""];
const row2 = ["", "", "", "", ""];
const row3 = ["", "", "", "", ""];
const row4 = ["", "", "", "", ""];
const row5 = ["", "", "", "", ""];
const row6 = ["", "", "", "", ""];


//function add letter to array
//install uuid

//setKeysOne, setKeysTwo, setKeysThree needs to be added below after keysOne [keysOne, setKeysOne]. I've removed them to get the app working. 
function App() {
  const [keysOne] = useState(keys1);
  const [keysTwo] = useState(keys2);
  const [keysThree] = useState(keys3);


// STATE GRID
  const [rowOne, setRowOne] = useState(row1);
  const [rowTwo, setRowTwo] = useState(row2);
  const [rowThree, setRowThree] = useState(row3);
  const [rowFour, setRowFour] = useState(row4);
  const [rowFive, setRowFive] = useState(row5);
  const [rowSix, setRowSix] = useState(row6);



//all props need to be in app.js. 

//selected state needs be be updated once a user clicks on the key, the onclick needs to be shown in the grid. 

//test the keyboard using a string and not an array. 

//book a group session on thursday. 

//use event (e) target value. 

//key onclick doesn't do anything. 

//research memory / O's & X's game as similar functions. 

  return (
    <div>
      <nav className="header">
        <h1 className="wordle">WORDLE</h1>
      </nav>
      <div className="btn">
        <Help />
      </div>
      <div className="grid-container">
          <RowOne box={rowOne} />
          <RowTwo box={rowTwo} />
          <RowThree box={rowThree} />
          <RowFour box={rowFour} />
          <RowFive box={rowFive} />
          <RowSix box={rowSix} />
      </div>
      <div className="Keyboard">
        <div className="grid">
          <Keyboard1 keys1={keysOne} selectLetter={() => console.log("hello1")}>
            {/* <Key onClick={() => handleClick(keys1)}>{keys1}</Key> */}
          </Keyboard1>
        </div>
        <div>
          <Keyboard2 keys2={keysTwo} selectLetter={() => console.log("hello2")}>
            {/* <Key onClick={() => handleClick(keys2)}>{keys2}</Key> */}
          </Keyboard2>
        </div>
        <div>
          <Keyboard3 keys3={keysThree} selectLetter={() => console.log("hello3")}>
            {/* <Key onClick={() => handleClick(keys3)}>{keys3}</Key> */}
          </Keyboard3>
        </div>
      </div>
    </div>
  );
}

export default App;
