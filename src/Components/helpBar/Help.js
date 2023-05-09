import "./help.css"
import {BiHelpCircle} from "react-icons/bi";
import {TbDeviceGamepad} from "react-icons/tb";
import Giveup from "./Giveup";
import { useState } from "react";
import Howtoplay from "./Howtoplay";

const Help = () => {


    const [status, setStatus] = useState(false);    
    const [statusTwo, setStatusTwo] =useState(false);


    return (
        <div className="bg-container">
              <div className="giveup-modal">
              {status && (
                <Giveup close={() => setStatus(false)}>
                  <div>
                    <h1>Give up here</h1>
                  </div>
                </Giveup>
              )}
              <BiHelpCircle onClick={() => setStatus(true)}></BiHelpCircle>
            </div>
            <div className="howtoplay-modal">
              {statusTwo && (
                <Howtoplay close={() => setStatusTwo(false)}>
                  <div>
                    <h3>How to play</h3>
                    <p>Guess the Wordle in 6 tries</p>

                  </div>
                </Howtoplay>
              )}
              <TbDeviceGamepad onClick={() => setStatusTwo(true)}></TbDeviceGamepad>
            </div>
        </div>

    );
};

export default Help;