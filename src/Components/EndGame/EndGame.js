import {MdClose} from "react-icons/md";
import "./endgame.css"

const EndGame = ({children, close}) => {
    return(
        <div className="overlay_close">
            <div className="content_close">
                <MdClose size={30} className="close" onClick={close}/>
                {children}
            </div>
        </div>
    );
};

export default EndGame;