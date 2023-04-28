import React from "react";

function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return <div className="Keyboard">
        <div className="row1"></div>
        <div className="row2"></div>
        <div className="row3"></div>
    </div>;
};

export default Keyboard;