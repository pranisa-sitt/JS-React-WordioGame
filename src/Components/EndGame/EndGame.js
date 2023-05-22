import {CgCloseO} from "react-icons/cg";
import "./endgame.css"

const EndGame = ({children, close}) => {
    return(
        <div className="overlay">
            <div className="content">
                <CgCloseO className="close" onClick={close}/>
                {children}
            </div>
        </div>
    );
};

export default EndGame;