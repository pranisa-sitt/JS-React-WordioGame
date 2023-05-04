import "../grid.css"
import Square from "../Square";


const RowSix = ({box}) => {
    return(
            <div className="row">
               {box.map((square) => (
                <Square squareValue={square}/>
               ))}
            </div>
    );
}

export default RowSix;