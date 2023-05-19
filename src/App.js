import { useState, useEffect } from "react";
import Keyboard from "./Components/Example/Keyboard";
import Row from "./Components/Example/Row";
import "./Components/Keyboard/keyboard.css";
import Giveup from "./Components/helpBar/Giveup";
import PopUp from "./Components/Popup/PopUp";



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
  const [winPopUp, setWinPopUp] = useState(false);
  const [lostPopUp, setLostPopUp] = useState(false);

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

  // section: Preparing value before it can validated: create new varaible for each filled rows and make it to string row by row.
  const newRowOneVal = rowOne.map((newOne => newOne.rowVal.toLowerCase()));
  const newRowOneValTxt = newRowOneVal.join('');

  const newRowTwoVal = rowTwo.map((newTwo => newTwo.rowVal.toLowerCase()));
  const newRowTwoValTxt = newRowTwoVal.join('');

  const newRowThreeVal = rowThree.map((newThree => newThree.rowVal.toLowerCase()));
  const newRowThreeValTxt = newRowThreeVal.join('');

  const newRowFourVal = rowFour.map((newFour => newFour.rowVal.toLowerCase()));
  const newRowFourValTxt = newRowFourVal.join('');

  const newRowFiveVal = rowFive.map((newFive => newFive.rowVal.toLowerCase()));
  const newRowFiveValTxt = newRowFiveVal.join('');

  const newRowSixVal = rowSix.map((newSix => newSix.rowVal.toLowerCase()));
  const newRowSixValTxt = newRowSixVal.join('');

  const wordTxt = word.join('');

  // Section: Validation function
  const winValidate = () => {
    if (wordTxt === newRowOneValTxt
      || wordTxt === newRowTwoValTxt
      || wordTxt === newRowThreeValTxt
      || wordTxt === newRowFourValTxt
      || wordTxt === newRowFiveValTxt
      || wordTxt === newRowSixValTxt) {
      setWinPopUp(true);
    };
  };

  const lostValidate = () => {
    if (newRowSixValTxt !== wordTxt
      && newRowOneValTxt
      && newRowTwoValTxt
      && newRowThreeValTxt
      && newRowFourValTxt
      && newRowFiveValTxt) {
      setLostPopUp(true)
    };
  };

  const handleKeyPress = (a) => {
    winValidate();
    if (a === "ENT") {
      // Enter button: changes row after 5 letters are added into the grid. it wont change row if the line isnt full of letters
      if (currentIndex === 5 && currentRowIndex < 5) {
        setCurrentRowIndex(currentRowIndex + 1);
        setCurrentIndex(0);
        setCurrentSquare(rows[currentRowIndex + 1][0]);
        lostValidate();
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
      };
    };
  };

  const handleGiveup = () => {
    setGiveup(true);
  };

  const handleCloseGiveup = () => {
    setGiveup(false)
  };

  const restartGame = () => {
    window.location.reload(false)
  };

  const closePopup = () => {
    setWinPopUp(false);
    restartGame();
  };

  return (
    <div>
      <button className="btn-giveup" onClick={handleGiveup}>Give up <span style={{ fontSize: '20px' }}>&#127987;</span></button>
      {giveup && (<Giveup word={word} closeGiveup={handleCloseGiveup} onClick={restartGame} />)}
      <nav className="header">
        <h1 className="wordle">WORDLE</h1>
      </nav>
      <div className="grid-container">
        <Row rows={rowOne} word={word} />
        <Row rows={rowTwo} word={word} />
        <Row rows={rowThree} word={word} />
        <Row rows={rowFour} word={word} />
        <Row rows={rowFive} word={word} />
        {winPopUp && <PopUp txt1={'Congratulations'} txt2={'YOU WIN!'} onClick={closePopup} />}
        {lostPopUp && <PopUp txt1={'Oh no..'} txt2={'YOU LOST T_T'} onClick={closePopup} />}
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
    </div>
  );
};


export default App;



