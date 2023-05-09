import "../grid.css"
import Square from "../Square";



const RowSix = ({box, selectedSquare}) => {
    return(
            <div className="row">
               {box.map((square) => (
                <Square squareValue={square.rowVal} key={square.id} selectedSquare={selectedSquare}/>
               ))}
            </div>
    );
}

export default RowSix;