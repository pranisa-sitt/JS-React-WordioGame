import {CgCloseO} from "react-icons/cg";
import "./giveup.css"

const Giveup = ({ word, onClick}) => {
    return(
    <div className="overlay">
        <div 
        className="content">
            <h2>Answer is...</h2>
            <h3 style={{color: 'red', fontSize: '50px' , backgroundColor: '#F8D034', textAlign: 'center'}}>{word}</h3>
            <button className='btn' onClick={onClick}>Restart</button>
        </div>
        
    </div>
    );
};

export default Giveup;

/*<CgCloseO className="close" onClick={closeGiveup}/> */