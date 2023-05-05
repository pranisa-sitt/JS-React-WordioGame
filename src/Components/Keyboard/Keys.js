import React from "react"; 
import { useState } from "react";
import "./Key.css";

function Key({keyValue, selectLetter, color}) {
    // const selectLetter = () => {
    // }
    let green = "#3CB043";
    let yellow = '#fed550';
    let grey = '#949494';
    let initial = '#E949494';
    const [letter, setLetter] = useState(color)

    //we want color to be changed when we click.
     const handleClick = () => {
           setLetter(yellow);
       }


    return (
        <div className="key" style={{backgroundColor: `${color=letter}`}} onClick={selectLetter=handleClick}>{keyValue}</div>
)};

export default Key;