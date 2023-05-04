import "../grid.css"
import Square from "../Square";


const RowFive = ({box}) => {
    return(
            <div className="row">
               {box.map((square) => (
                <Square squareValue={square}/>
               ))}
            </div>
    );
}

export default RowFive;