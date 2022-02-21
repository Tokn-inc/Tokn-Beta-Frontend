import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Login.css";
import metamask from '../images/metamask.png';

function Metamask() {
  
  return (
    <div className="wallet-container">
      <div>
        <h1 className="connect-wallet">Connect Wallet</h1>
        <img src={metamask} alt="Metamask logo" class="metamask-img" />
        <button type="button" name="button" class="btn-primary metamask-btn">Metamask</button>
        <br />
        <Link to="/username">
        <button type="button" name="button" class="btn-primary nextpage np3">Next Page</button>
        </Link>
      </div>  
    </div>
  );
}

export default Metamask;
