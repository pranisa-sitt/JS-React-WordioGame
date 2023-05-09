import "../grid.css"
import Square from "../Square";
import { v4 as uuidv4 } from 'uuid';



const RowFour = ({box, selectedSquare}) => {
    return(
            <div className="row">
               {box.map((square) => (
                <Square squareValue={square.rowVal} index={square.id} selectedSquare={selectedSquare}/>
               ))}
            </div>
    );
}

export default RowFour;