import "../grid.css"
import Square from "../Square";


const RowTwo = ({box, selectedSquare, currentSquare, nextRow}) => {
    
    return(
            <div className="row">
               {box.map((square) => (
                <Square key={square.id} index={square.id} squareValue={square.rowVal} selectedSquare={selectedSquare} currentSquare={currentSquare} nextRow={nextRow} />
               ))}
            </div>
    );
}

export default RowTwo;