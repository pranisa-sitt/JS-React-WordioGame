import React from "react"; 
import { useState } from "react";
import "./Key.css";

function Key({keyValue, selectLetter, color, index}) {
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

    return (
        <div className="key" style={{backgroundColor: `${color=letter}`}} onClick={selectLetter=handleClick} index={index}>{keyValue}</div>
)};

export default Key;