import Keyboard1 from "./Components/Keyboard/Keyboard1.js";
import Keyboard2 from "./Components/Keyboard/Keyboard2.js";
import Keyboard3 from "./Components/Keyboard/Keyboard3.js";
import Key from "./Components/Keyboard/Keys.js";
import Grid from "./Components/Grid/Grid.js";
import { useState } from "react";
import "./Components/Keyboard/keyboard.css";


const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];


//function add letter to array
//install uuid

//setKeysOne, setKeysTwo, setKeysThree needs to be added below after keysOne [keysOne, setKeysOne]. I've removed them to get the app working. 
function App() {
  const [keysOne] = useState(keys1);
  const [keysTwo] = useState(keys2);
  const [keysThree] = useState(keys3);

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
      <Grid></Grid>
      <div className="Keyboard">
        <div>
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
