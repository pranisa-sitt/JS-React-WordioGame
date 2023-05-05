import Keyboard1 from "./Components/Keyboard/Keyboard1.js";
import Keyboard2 from "./Components/Keyboard/Keyboard2.js";
import Keyboard3 from "./Components/Keyboard/Keyboard3.js";
import Grid from "./Components/Grid/Grid.js";
import { useState } from "react";
import RowOne from "./Components/Grid/Rows/RowOne.js";

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];
const row1 = ["", "", "", "", ""]


//function add letter to array
//install uuid
//3 states with 3 different colors

function App() {

    const [keysOne, setKeysOne] = useState(keys1);
    const [keysTwo] = useState(keys2);
    const [keysThree] = useState(keys3);

    const [row, setRow] = useState(row1);


  return (
    <div>
      <RowOne box={row} />
      <Keyboard1 keys1={keysOne} selectLetter={() => console.log("hello1")} />
      <Keyboard2 keys2={keysTwo} selectLetter={() => console.log("hello2")} />
      <Keyboard3 keys3={keysThree} selectLetter={() => console.log("hello3")} />
    </div>
  );
}

export default App;
