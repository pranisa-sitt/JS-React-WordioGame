import "./grid.css";
import Row from "./Row";

const Grid = () => {
    return(
        <div className="container">
            {Array.apply(null, {length: 6}).map((e, i) => (
                <Row></Row>
            ))}
        </div>
    );
}

export default Grid;