import React from "react"; 
import "./Key.css";

function Key({keyValue, selectLetter, color}) {
    // const selectLetter = () => {
    // }
    return (
        <div className="key" style={{backgroundColor: `${color}`}} onClick={selectLetter}>{keyValue}</div>
)};

export default Key;