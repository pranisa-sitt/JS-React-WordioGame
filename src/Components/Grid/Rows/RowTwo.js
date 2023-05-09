import "../grid.css"
import Square from "../Square";


const RowTwo = ({box, selectedSquare}) => {
    return(
            <div className="row">
               {box.map((square) => (
                <Square squareValue={square.rowVal} key={square.id} selectedSquare={selectedSquare}/>
               ))}
            </div>
    );
}

export default RowTwo;