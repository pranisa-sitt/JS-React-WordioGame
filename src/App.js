import { useState, useEffect } from "react";
import Keyboard from "./Components/Example/Keyboard";
import Row from "./Components/Example/Row";
import "./Components/Keyboard/keyboard.css";
import EndGame from "./Components/EndGame/EndGame";
import Giveup from "./Components/helpBar/Giveup";
import StartGame from "./Components/StartGame/StartGame";
import Mario from "./images/Mario.png";


// your old App.js is now in test.js, you can delete that later

const keys1 = [
  { keyVal: "Q", id: 1 },
  { keyVal: "W", id: 2 },
  { keyVal: "E", id: 3 },
  { keyVal: "R", id: 4 },
  { keyVal: "T", id: 5 },
  { keyVal: "Y", id: 6 },
  { keyVal: "U", id: 7 },
  { keyVal: "I", id: 8 },
  { keyVal: "O", id: 9 },
  { keyVal: "P", id: 10 },
];

const keys2 = [
  { keyVal: "A", id: 11 },
  { keyVal: "S", id: 12 },
  { keyVal: "D", id: 13 },
  { keyVal: "F", id: 14 },
  { keyVal: "G", id: 15 },
  { keyVal: "H", id: 16 },
  { keyVal: "J", id: 17 },
  { keyVal: "K", id: 18 },
  { keyVal: "L", id: 19 },
];

const keys3 = [
  { keyVal: "DEL", id: 20 },
  { keyVal: "Z", id: 21 },
  { keyVal: "X", id: 22 },
  { keyVal: "C", id: 23 },
  { keyVal: "V", id: 24 },
  { keyVal: "B", id: 25 },
  { keyVal: "N", id: 26 },
  { keyVal: "M", id: 27 },
  { keyVal: "ENT", id: 28 },
];

const row1 = [
  { rowVal: "", id: 29 },
  { rowVal: "", id: 30 },
  { rowVal: "", id: 31 },
  { rowVal: "", id: 32 },
  { rowVal: "", id: 33 },
];

const row2 = [
  { rowVal: "", id: 33 },
  { rowVal: "", id: 34 },
  { rowVal: "", id: 35 },
  { rowVal: "", id: 36 },
  { rowVal: "", id: 37 },
];

const row3 = [
  { rowVal: "", id: 39 },
  { rowVal: "", id: 40 },
  { rowVal: "", id: 41 },
  { rowVal: "", id: 42 },
  { rowVal: "", id: 43 },
];

const row4 = [
  { rowVal: "", id: 44 },
  { rowVal: "", id: 45 },
  { rowVal: "", id: 46 },
  { rowVal: "", id: 47 },
  { rowVal: "", id: 48 },
];

const row5 = [
  { rowVal: "", id: 49 },
  { rowVal: "", id: 50 },
  { rowVal: "", id: 51 },
  { rowVal: "", id: 52 },
  { rowVal: "", id: 53 },
];

const row6 = [
  { rowVal: "", id: 54 },
  { rowVal: "", id: 55 },
  { rowVal: "", id: 56 },
  { rowVal: "", id: 57 },
  { rowVal: "", id: 58 },
];

const words = [
  ["m", "a", "r", "i", "o"],
  ["l", "u", "i", "g", "i"],
  ["y", "o", "s", "h", "i"],
  ["p", "e", "a", "c", "h"],
  ["d", "a", "i", "s", "y"],
  ["s", "t", "a", "r", "t"],
];

function App() {

  //end of game pop-up
  const [status, setStatus] = useState(false);  
  
  const [result,setResult] = useState();
  


  const [keys, setKeys] = useState([keys1, keys2, keys3]);

  let [currentIndex, setCurrentIndex] = useState(0);
  const [currentSquare, setCurrentSquare] = useState(row1[currentIndex]);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);

  const [rows, setRows] = useState([row1, row2, row3, row4, row5, row6]);

  const [color, setColor] = useState("#E949494");

  const [word, setWord] = useState([]);

  const [rowOne, setRowOne] = useState(row1);
  const [rowTwo, setRowTwo] = useState(row2);
  const [rowThree, setRowThree] = useState(row3);
  const [rowFour, setRowFour] = useState(row4);
  const [rowFive, setRowFive] = useState(row5);
  const [rowSix, setRowSix] = useState(row6);

  const [giveup, setGiveup] = useState(false);

  const [startGame, setStartGame] = useState(true);

  const [showImage, setShowImage] =useState(false);


  useEffect(() => {
    randomWord();
  }, []);

  // for checking when developing
  useEffect(() => {
    console.log(word);
  }, [word]);

  const randomWord = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
  };

  const handleKeyPress = (a) => {
    if (a === "ENT") {
      // Enter button: changes row after 5 letters are added into the grid. it wont change row if the line isnt full of letters
      if (currentIndex === 5 && currentRowIndex < 5) {
        setCurrentRowIndex(currentRowIndex + 1);
        setCurrentIndex(0);
        setCurrentSquare(rows[currentRowIndex + 1][0]);
      }
    } else if (a === "DEL") {
      // Delete works if we are not on the first square
      if (currentIndex > 0) {
        setCurrentIndex((currentIndex -= 1));
        setCurrentSquare(rows[currentRowIndex][currentIndex]);
        setCurrentSquare((currentSquare) => (currentSquare.rowVal = ""));
        if (currentIndex < 5) {
        setCurrentSquare(rows[currentRowIndex][currentIndex]);
        }
      }
    } else {
      // this section stops the enter button from working after 5 rows are filled.
      if (currentIndex < 5) {
        setCurrentSquare((currentSquare) => (currentSquare.rowVal = a));
        setCurrentIndex((currentIndex += 1));
        if (currentIndex < 5)
          setCurrentSquare(rows[currentRowIndex][currentIndex]);
      }
    }
    if (a === "ENT" && currentRowIndex === 5) {
      setStatus(true);
      setResult(`Game over \n` + `the answer was` + word.join(""))
    }
    if (valueRow1.join() === word.join() || valueRow2.join() === word.join() || valueRow3.join() === word.join() ||
    valueRow4.join() === word.join() || valueRow5.join() === word.join() || 
    valueRow6.join() === word.join() && a === "ENT") {
      setStatus(true);
      setResult("Good job!");
      setShowImage(true);
    }    
  };



let valueRow1 = row1.map(a => a.rowVal.toLowerCase());
let valueRow2 = row2.map(a => a.rowVal.toLowerCase());
let valueRow3 = row3.map(a => a.rowVal.toLocaleLowerCase());
let valueRow4 = row4.map(a => a.rowVal.toLocaleLowerCase());
let valueRow5 = row5.map(a => a.rowVal.toLocaleLowerCase());
let valueRow6 = row6.map(a => a.rowVal.toLocaleLowerCase());



  const handleGiveup = () => {
    setGiveup(true);
  }

  const handleCloseGiveup = () => {
    setGiveup(false)
  }

  const handleStartGame = () => {
    setStartGame(false)
  }

  const restartGame = () => {
    window.location.reload(false)
  }


  return (
    <div className="wall-container">
      {startGame && (<StartGame onClick={handleStartGame} />)}
      <nav className="header">
        <h1 className="wordle">WORDIO</h1>
      </nav>
      <div className="bg-container">
        <div className="endgame-modal">
          {status && <EndGame close={() => setStatus(false)}>
              <div>
                <h1>{result}</h1>
                <div>
                  {showImage && <img className="img" src={Mario}></img>}
                </div>
              </div>
            </EndGame>}
        </div>
      </div>
      <div className="grid-container">
        <Row rows={rowOne} word={word} />
        <Row rows={rowTwo} word={word} />
        <Row rows={rowThree} word={word} />
        <Row rows={rowFour} word={word} />
        <Row rows={rowFive} word={word} />
        <Row rows={rowSix} word={word} />
      </div>
      <div className="Keyboard">
        <div>
          <Keyboard color={color} keys={keys1} handleKeyPress={handleKeyPress} />
        </div>
        <div>
          <Keyboard color={color} keys={keys2} handleKeyPress={handleKeyPress} />
        </div>
        <div>
          <Keyboard color={color} keys={keys3} handleKeyPress={handleKeyPress} />
        </div>
      </div>
      <nav className="footer">
        <button className="btn-giveup" onClick={handleGiveup}>Give up <span style={{fontSize: '20px'}}>&#127987;</span></button>
        {giveup && (<Giveup word={word} closeGiveup={handleCloseGiveup} onClick={restartGame} />)}
      </nav>
    </div>
  );
}

export default App;
