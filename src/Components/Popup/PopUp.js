import {CgCloseO} from "react-icons/cg";
import "./Popup.css"

const PopUp = ({ txt1, txt2, onClick }) => {
  return (
    <div className="overlay">
      <div className="content">
      <CgCloseO className="close" onClick={onClick} />
        <p>{txt1}</p>
        <h2>{txt2}</h2>
      </div>
    </div>
  )

};

export default PopUp;