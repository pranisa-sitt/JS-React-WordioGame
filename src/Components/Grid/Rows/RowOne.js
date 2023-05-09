import "../grid.css"
import Square from "../Square";


const RowOne = ({box, selectedSquare}) => {

    
    return(
            <div className="row">
               {box.map((square) => (
                <Square key={square.id} squareValue={square.rowVal} selectedSquare={selectedSquare}/>
               ))}
            </div>
    );
}

export default RowOne;