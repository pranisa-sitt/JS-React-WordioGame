import "../Grid/grid.css";

const Row = ({ rows, word }) => {
  return (
    <div className="row">
      {rows.map((row, i) => {
        const bgColor =
          word[i] === row.rowVal.toLowerCase()
            ? "green"
            : word.includes(row.rowVal.toLowerCase())
            ? "yellow"
            : word[i] !== row.rowVal.toLowerCase() && row.rowVal.toLowerCase()
            ? "grey"
            : "";

        return (
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "2px solid #b0b0b0",
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
