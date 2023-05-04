import Keyboard from "./Components/Keyboard/Keyboard.js";
import Grid from "./Components/Grid/Grid.js";
import { useState } from "react";
import RowOne from "./Components/Grid/Rows/RowOne.js";

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const row1 = ["", "", "", "", ""]


//function add letter to array
//install uuid
//3 states with 3 different colors

function App() {

  const [keys, setKeys] = useState(keys1);
  const [row, setRow] = useState(row1);



  const addLetter = event =>  {
    setKeys(event.target.value);
    console.log(setKeys);
  }


  return (
    <div>
      <RowOne box={row} />
      <Keyboard keys1={keys} selectLetter={() => console.log(addLetter)} />

      
    </div>
  );
}

export default App;
