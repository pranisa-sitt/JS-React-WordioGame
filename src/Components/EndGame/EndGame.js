import {MdClose} from "react-icons/md";
import "./endgame.css"

const EndGame = ({children, close, onClick}) => {
    return(
        <div className="overlay_close">
            <div className="content_close">
                <MdClose size={30} className="close" onClick={close}/>
                {children}
                <button className="btn-endGame" onClick={onClick}>New Game</button>
            </div>
        </div>
    );
};

export default EndGame;