import "../../index.css";


const Row = ({ rows, word, currentRowIndex, index }) => {
  return (
    <div className="row">
      {rows.map((row, i) => {
        const bgColor = 
          index >= currentRowIndex ? "" : 
          word[i] === row.rowVal.toLowerCase() 
            ? "#2AA146"
            : word.includes(row.rowVal.toLowerCase())
            ? "#F8D034"
            : word[i] !== row.rowVal.toLowerCase() && row.rowVal.toLowerCase()
            ? "#B3B4B6"
            : "";

// I have hard coded index in the row component to get this to work, comparing index to the currentRowIndex. 
// If the index is more than or equal to current row index then "ENT" could not have been clicked for this row. In this case we dont set a background colour for that row. 


        return (
    
          <div 
            style={{
              width: "50px",
              height: "50px",
              border: "2px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "25px",
              backgroundColor: bgColor,
            }}
            key={row.id}
          >
            {row.rowVal} 
            {/* {currentRowIndex} - {index}   */}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
