import React from "react"; 
import { useState } from "react";
import "./Key.css";
import Square from "../Grid/Square";


function Key({keyValue, selectLetter, color, index, currentSquare, addLetter}) {
    //  const selectLetter = () => {
    //  }

// this needs to be fixed and the state updates changed, the handle click neds to be handled in app. 

    /*let green = "#3CB043";
    let yellow = '#fed550';
    let grey = '#949494';
    let initial = '#E949494';
    const [letter, setLetter] = useState(initial)
    const changeColor = () => {
        setLetter(yellow)
    }*/

    let letter = '##E949494'; 
    
    const handleSelectedLetter = (l) => {
        console.log(l)
        console.log(currentSquare)
    }

    return (
        <div className="key" style={{backgroundColor: `${color=letter}`}} onClick={() => addLetter(selectLetter)} index={index}>{keyValue}</div>
)};
    
        

export default Key;