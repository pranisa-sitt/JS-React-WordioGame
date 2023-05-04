import React from "react";
import "./keyboard.css";
import Key from "./Keys"

function Keyboard({selectLetter, keys1, color}) {
    //Key Array
   // const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    //const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    //const keys3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];

    //create 3 different keyboard components

    return <div className="Keyboard">
        <div className="row1">
            {keys1.map((key) => (
                <Key color={color} keyValue={key} selectLetter={selectLetter} />
            ))};
        </div>
   
        {/*
        <div className="row2">
            {keys2.map((key) => (
                <Key keyValue={key} selectLetter={selectLetter} />
            ))}
        </div>
        <div className="row3">
            {keys3.map((key) => {
                return <Key keyValue={key} selectLetter={selectLetter} />;
            })}
        </div>
        <div className="row2"></div>
        <div className="row3"></div> */}
    </div>;
};

export default Keyboard;