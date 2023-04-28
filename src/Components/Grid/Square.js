const square = {
    width: "70px",
    height: "70px",
    border: "2px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
}

const Square = ({children}) => {
    return (
            <div style={square}>{children}</div>
    );
}

export default Square;