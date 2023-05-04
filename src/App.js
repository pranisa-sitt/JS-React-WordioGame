import Keyboard from "./Components/Keyboard/Keyboard.js";
import Grid from "./Components/Grid/Grid.js";
import { useState } from "react";

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];



//install uuid
//3 states with 3 different colors

function App() {

  const [keys, setKeys] = useState(keys1);



  return (
    <div>
      <Grid></Grid>
      <Keyboard keys1={keys} selectLetter={() => console.log("hello")} />

      
    </div>
  );
}

export default App;
