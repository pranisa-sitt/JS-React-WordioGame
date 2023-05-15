import { useState, useEffect } from "react";
import Keyboard from "./Components/Example/Keyboard";
import Row from "./Components/Example/Row";
import "./Components/Keyboard/keyboard.css";

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

const row1 = [
  { rowVal: "", id: 29 },
  { rowVal: "", id: 30 },
  { rowVal: "", id: 31 },
  { rowVal: "", id: 32 },
  { rowVal: "", id: 33 },
];

const words = [
  ["a", "g", "a", "i", "n"],
  ["b", "a", "c", "o", "n"],
  ["b", "r", "a", "i", "n"],
  ["c", "a", "m", "e", "l"],
  ["d", "a", "n", "c", "e"],
];

function App() {
  const [keys, setKeys] = useState(keys1);

  let [currentIndex, setCurrentIndex] = useState(0);
  const [currentSquare, setCurrentSquare] = useState(row1[currentIndex]);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);

  const [rows, setRows] = useState([row1]);

  const [color, setColor] = useState("#E949494");

  const [squareColor, setSquareColor] = useState("");

  const [word, setWord] = useState([]);

  const [rowOne, setRowOne] = useState(row1);

  useEffect(() => {
    randomWord();
  }, []);

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
        setCurrentIndex(currentIndex - 1);
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
  };

  return (
    <div>
      <nav className="header">
        <h1 className="wordle">WORDLE</h1>
      </nav>

      <div className="grid-container">
        <Row rows={rowOne} word={word} />
      </div>
      <div className="Keyboard">
        <div>
          <Keyboard color={color} keys={keys} handleKeyPress={handleKeyPress} />
        </div>
      </div>
    </div>
  );
}

export default App;
