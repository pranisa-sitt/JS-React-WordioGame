import "./howtoplay.css";
import {CgCloseO} from "react-icons/cg";

const Howtoplay = ({children, close}) => {
    return (
        <div className="overlay">
        <div className="content">
            <CgCloseO className="close" onClick={close}/>
            {children}
        </div>
    </div>
    );
};

export default Howtoplay;