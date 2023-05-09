import { v4 as uuidv4  } from "uuid";
import {useState} from "react";

const square = {
    width: "50px",
    height: "50px",
    border: "2px solid #b0b0b0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
}
//created square with props so we can use the props to input the letter later



const Square = ({squareValue, index}) => {

    return (
        <div style={square} index={index}>{squareValue}</div>
    );
}

export default Square;