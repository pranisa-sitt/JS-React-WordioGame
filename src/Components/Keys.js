import React from "react"; 
import "./Key.css";

function Key({keyValue}) {
    const selectLetter = () => {
    }
    return (
        <div className="key" onClick={selectLetter}>{keyValue}</div>
)};

export default Key;