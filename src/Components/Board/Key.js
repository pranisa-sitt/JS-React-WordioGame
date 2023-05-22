import "../KeyboardStyle/Key.css";

const Key = ({ color, handleKeyPress, keyValue }) => {
  return (
    <div
      className="key"
      style={{ backgroundColor: `${color}` }}
      onClick={() => handleKeyPress(keyValue)}
    >
      {keyValue}
    </div>
  );
};

export default Key;
