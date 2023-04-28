import "./grid.css"
import Square from "./Square";

const rowStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "10px"
}


const Row = ({children}) => {
   // create 5 squares in a row
   // input from user is gonna have to go inside of square
    return(
            <div style={rowStyle}>
                {Array.apply(null, {length: 5}).map((e, i) => (
                    <Square>{children}</Square>
                ))}
            </div>
    );
}

export default Row;