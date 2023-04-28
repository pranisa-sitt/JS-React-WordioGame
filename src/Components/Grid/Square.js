const square = {
    width: "50px",
    height: "50px",
    border: "2px solid #b0b0b0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
}

//created square with props so we can use the props to input the letter later

const Square = ({children}) => {
    return (
            <div style={square}>{children}</div>
    );
}

export default Square;