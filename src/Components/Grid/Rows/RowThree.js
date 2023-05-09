import "../grid.css"
import Square from "../Square";


const RowThree = ({box, selectedSquare, currentSquare}) => {

    return(
            <div className="row">
               {box.map((square) => (
                <Square key={square.id} index={square.id} squareValue={square.rowVal} selectedSquare={selectedSquare} currentSquare={currentSquare}/>
               ))}
            </div>
    );
}

export default RowThree;