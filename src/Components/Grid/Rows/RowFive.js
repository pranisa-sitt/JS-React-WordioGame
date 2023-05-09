import "../grid.css"
import Square from "../Square";
import React from 'react';


const RowFive = ({box, selectedSquare}) => {
    return(
            <div className="row">
               {box.map((square) => (
                <Square squareValue={square.rowVal} index={square.id} selectedSquare={selectedSquare}/>
               ))}
            </div>
    );
}

export default RowFive;