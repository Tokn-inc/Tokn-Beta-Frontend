import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Login.css";
import metamask from '../images/metamask.png';
import {useSelector, useDispatch} from "react-redux"
import {connectWallet} from "../../redux";
import web3 from '../../web3'

function Metamask() {
  const dispatch = useDispatch()
  const {error, address} = useSelector((state) => state.wallet)

  useEffect(() => {
    if(address){
      window.location= "/username"
    }
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    if(!address){
      alert("Connect Wallet First.")
    }else{
      window.location= "/username"
    }
  }
  return (
    <div className="wallet-container">
      <div>
        <h1 className="connect-wallet">Connect Wallet</h1>
        <img src={metamask} alt="Metamask logo" class="metamask-img" />
        {address ? <div className="ethAccount">Account: {address}</div> : <button type="button" name="button" class="btn-primary metamask-btn" onClick={() => dispatch(connectWallet(web3))}>Metamask</button>}
        
        <br />
        {/* <Link to="/username"> */}
        <button type="button" name="button" class="btn-primary nextpage np3" onClick={handleClick}>Next Page</button>
        {/* </Link> */}
      </div>  
    </div>
  );
}

export default Metamask;
