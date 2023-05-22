import "../Keyboard/keyboard.css";
import Key from "./Key";

const Keyboard = ({ keys, color, handleKeyPress }) => {
  return (
    <div className="Row">
      {keys.map((key) => {
        return (
        <Key
          color={color}
          keyValue={key.keyVal}
          key={key.id}
          handleKeyPress={handleKeyPress}
        />)
      })}
    </div>
  );
};

export default Keyboard;
