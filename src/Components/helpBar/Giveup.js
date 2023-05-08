import {CgCloseO} from "react-icons/cg";
import "./giveup.css"

const Giveup = ({children, close}) => {
    return(
        <div className="overlay">
            <div className="content">
                <CgCloseO className="close" onClick={close}/>
                {children}
            </div>
        </div>
    );
};

export default Giveup;