import React from "react";
import "./keyboard.css";
import "./Key.css";
//import Key from "./Keys"

function Keyboard() {
    //Key Array
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    //A different div for each of the keyboard lines. I have done this beacuse they have different sizes and therefore layout properties
    return <div className="Keyboard">
        <div className="row1">
            {keys1.map((key) => {
                return <div className="key"> {key} </div>;
            })}
        </div>
        <div className="row2">
            {keys2.map((key) => {
                return <div className="key"> {key} </div>;
            })}
        </div>
        <div className="row3">
            {keys3.map((key) => {
                return <div className="key"> {key} </div>;
            })}
        </div>
        <div className="row2"></div>
        <div className="row3"></div>
    </div>;
};

export default Keyboard;