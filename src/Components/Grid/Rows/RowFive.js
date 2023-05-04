import "../grid.css"
import Square from "../Square";
import { v4 as uuidv4  } from "uuid";


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