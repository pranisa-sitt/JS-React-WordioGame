import React from "react";
import "./keyboard.css";
import Key from "./Keys"

function Keyboard1({selectLetter, keys1, color, currentSquare, addLetter}) {
    // console.log(keys1);
    //Key Array
   // const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    //const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    //const keys3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];

    //create 3 different keyboard components
    return <div>
        <div className="Row">
            {keys1.map((key) => (
                <Key color={color} keyValue={key.keyVal} key={key.id} selectLetter={key.keyVal} currentSquare={currentSquare} addLetter={addLetter}/>
            ))}
        </div>
    </div>;
};

export default Keyboard1;