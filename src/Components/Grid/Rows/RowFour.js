import "../grid.css"
import Square from "../Square";


const RowFour = ({box}) => {
    return(
            <div className="row">
               {box.map((square) => (
                <Square squareValue={square}/>
               ))}
            </div>
    );
}

export default RowFour;