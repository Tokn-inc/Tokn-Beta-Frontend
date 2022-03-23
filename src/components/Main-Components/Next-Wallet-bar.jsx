import React from "react";
import  {useState} from "react";
import wallet from "../images/wallet.png";
import tokn from "../images/tokn.jpg";
import dollar from "../images/dollar.png";
import metamask from "../images/metamask.png";
import "./Main.css";

function WalletBar() {
  const [state, setState] = useState(false);
  return (
 

      <div class="wallet-div">
       {!state &&  <img src={wallet} alt="wallet" class="wallet-img"  onClick={() => setState(true)} />}
       {state &&    <div className='hide'>
       {state &&  <img src={wallet} alt="wallet" class="wallet-img2" onClick={() => setState(false)}/>}
          <div className="totalfunds"><p>Total Funds</p></div>
        <div className="amount"> <p> $34.90</p></div>


        <div ><img src={tokn} alt="tokn" class="tokn-img"/><div className="wallet-text1">4.35</div></div> 
        <div ><img src={dollar} alt="dollar" class="dollar-img"/><div  className="wallet-text2">300.55</div></div> 
    <button className="meta-button"><img src={metamask} class="button-img" /></button>
      </div>}</div>
  );
}

export default WalletBar;
