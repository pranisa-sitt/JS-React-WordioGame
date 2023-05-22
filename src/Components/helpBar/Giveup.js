//import {CgCloseO} from "react-icons/cg";
import "./giveup.css"

const Giveup = ({ word, onClick}) => {
    return(
    <div className="overlay">
        <div 
        className="content">
            <h1>You just gave up.</h1>
            <h4>Answer is...</h4>
            <h3 className="card">{word}</h3>
            <button className='btn' onClick={onClick}>Restart</button>
        </div>
        
    </div>
    );
};

export default Giveup;

/*<CgCloseO className="close" onClick={closeGiveup}/> */