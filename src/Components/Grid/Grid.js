import "./grid.css";
import { useState } from "react";
import RowOne from "./Rows/RowOne";
import RowTwo from "./Rows/RowTwo";
import RowThree from "./Rows/RowThree";
import RowFour from "./Rows/RowFour";
import RowFive from "./Rows/RowFive";
import RowSix from "./Rows/RowSix";


const row1 = ["1", "2", "3", "4", "5"]
const row2 = ["6", "7", "8", "9", "10"]
const row3 = ["6", "7", "8", "9", "10"]
const row4 = ["6", "7", "8", "9", "10"]
const row5 = ["6", "7", "8", "9", "10"]
const row6 = ["6", "7", "8", "9", "10"]

const Grid = () => {

    const [rowOne, setRowOne] = useState(row1);
    const [rowTwo, setRowTwo] = useState(row2);
    const [rowThree, setRowThree] = useState(row3);
    const [rowFour, setRowFour] = useState(row4);
    const [rowFive, setRowFive] = useState(row5);
    const [rowSix, setRowSix] = useState(row6);

    return(
        <div className="container">
            <RowOne box={rowOne} />
            <RowTwo box={rowTwo} />
            <RowThree box={rowThree} />
            <RowFour box={rowFour} />
            <RowFive box={rowFive} />
            <RowSix box={rowSix} />
        </div>
    );
}

export default Grid;