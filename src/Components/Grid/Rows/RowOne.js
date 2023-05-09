import "../grid.css"
import Square from "../Square";


const RowOne = ({box, selectedSquare}) => {

    
    return(
            <div className="row">
               {box.map((square) => (
                <Square index={square.id} squareValue={square.rowVal} selectedSquare={selectedSquare}/>
               ))}
            </div>
    );
}

export default RowOne;