import { useState } from "react";
//import "./App.css";
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


//you want to map out the array keys1 that is in the state keysOne. So keysOne is the state you should map out over keyboard. 
// Pass in the parameter key and through that you can access the key.keyVal and key.id has context menu
//use different name for values

const keys1 = [{keyVal: "Q", id: 1}, {keyVal: "W", id: 2}, {keyVal: "E", id: 3}, {keyVal: "R", id: 4}, {keyVal: "T", id: 5}, {keyVal: "Y", id: 6}, {keyVal: "U", id: 7}, {keyVal: "I", id: 8}, {keyVal: "O", id: 9}, {keyVal:"P", id: 10}];
const keys2 = [{keyVal: "A", id: 11}, {keyVal: "S", id: 12}, {keyVal: "D", id: 13}, {keyVal: "F", id: 14}, {keyVal: "G", id: 15}, {keyVal: "H", id: 16}, {keyVal: "J", id: 17}, {keyVal: "K", id: 18}, {keyVal: "L", id: 19}];
const keys3 = [{keyVal: "DEL", id: 20}, {keyVal: "Z", id: 21}, {keyVal: "X", id: 22}, {keyVal: "C", id: 23}, {keyVal: "V", id: 24}, {keyVal: "B", id: 25}, {keyVal: "N", id: 26}, {keyVal: "M", id: 27}, {keyVal: "ENT", id: 28}];

//object with empty value string and id 


//value name should be something else

const row1 = [{rowVal: "", id: 29}, {rowVal: "", id: 30}, {rowVal: "", id: 31}, {rowVal: "", id: 32}, {rowVal: "", id: 33}];
const row2 = [{rowVal: "", id: 34}, {rowVal: "", id: 35}, {rowVal: "", id: 36}, {rowVal: "", id: 37}, {rowVal: "", id: 38}];
const row3 = [{rowVal: "", id: 39}, {rowVal: "", id: 40}, {rowVal: "", id: 41}, {rowVal: "", id: 42}, {rowVal: "", id: 43}];
const row4 = [{rowVal: "", id: 44}, {rowVal: "", id: 45}, {rowVal: "", id: 46}, {rowVal: "", id: 47}, {rowVal: "", id: 48}];
const row5 = [{rowVal: "", id: 49}, {rowVal: "", id: 50}, {rowVal: "", id: 51}, {rowVal: "", id: 52}, {rowVal: "", id: 53}];
const row6 = [{rowVal: "", id: 54}, {rowVal: "", id: 55}, {rowVal: "", id: 56}, {rowVal: "", id: 57}, {rowVal: "", id: 58}];


//function add letter to array
const words = [
  ['a','g','a','i','n'],
  ['b','a','c','o','n'],
  ['b','r','a','i','n'],
  ['c','a','m','e','l'],
  ['d','a','n','c','e']
];

const getRandomWord = () => {  
  return  words[Math.floor(Math.random()*words.length)];
};


//setKeysOne, setKeysTwo, setKeysThree needs to be added below after keysOne [keysOne, setKeysOne]. I've removed them to get the app working. 
function App() {
  const [keysOne, setKeysOne] = useState(keys1);
  const [keysTwo, setKeysTwo] = useState(keys2);
  const [keysThree, setKeysThree] = useState(keys3);
  // set the initial value of the current square
  let [currentSquare] = useState(row1[0])
  

// STATE GRID
  const [rowOne, setRowOne] = useState(row1);
  const [rowTwo, setRowTwo] = useState(row2);
  const [rowThree, setRowThree] = useState(row3);
  const [rowFour, setRowFour] = useState(row4);
  const [rowFive, setRowFive] = useState(row5);
  const [rowSix, setRowSix] = useState(row6);



  // Coloring function is here.
  // Need to edit condition to setState of these colors.
    /*let green = "#3CB043";
    let yellow = "#fed550";
    let grey = "#949494";*/
    let initial = "#E949494";
    const [letter, setLetter] = useState(initial)


   const [word, setWord] = useState(getRandomWord());
    
  

//array that contains possible words and the winner word.
//random function that dictates the winner word. This function can only be called one time per game (when you change row you don't want a new word!)

//IF row1(...) = words arry => validate, else =>not valid
// If row1(...) any letter equals getrandomWord letters => change color to green / yellow
// if row1(...) any letter != getrandom letters => change color to grey
//IF row1, row2, row3 etc = getRandomWord => win!




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
          <RowOne box={rowOne} currentSquare={currentSquare} />
          <RowTwo box={rowTwo} currentSquare={currentSquare}/>
          <RowThree box={rowThree} currentSquare={currentSquare}/>
          <RowFour box={rowFour} currentSquare={currentSquare}/>
          <RowFive box={rowFive} currentSquare={currentSquare}/>
          <RowSix box={rowSix} currentSquare={currentSquare}/>
      </div>
      <div className="Keyboard">
        <div>
          <Keyboard1 color={letter} keys1={keysOne} currentSquare={currentSquare}/>
        </div>
        <div>
          <Keyboard2 color={letter} keys2={keysTwo} currentSquare={currentSquare}/>
        </div> 
        <div>
          <Keyboard3 color={letter} keys3={keysThree} currentSquare={currentSquare}/>
        </div> 
      </div>
    </div>
  );
}

export default App;
