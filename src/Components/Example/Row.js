import "../Grid/grid.css";

const Row = ({ rows, word }) => {
  return (
    <div className="row">
      {rows.map((row, i) => {
        const bgColor =
          word[i] === row.rowVal.toLowerCase()
            ? "#2AA146"
            : word.includes(row.rowVal.toLowerCase())
            ? "#F8D034"
            : word[i] !== row.rowVal.toLowerCase() && row.rowVal.toLowerCase()
            ? "#B3B4B6"
            : "";

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
          </div>
        );
      })}
    </div>
  );
};

export default Row;
