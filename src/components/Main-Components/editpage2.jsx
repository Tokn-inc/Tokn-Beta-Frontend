import React, {useState} from 'react';
import './editpage2.css';
import { CgClose } from 'react-icons/cg';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link, withRouter } from "react-router-dom";
// import { fa-cc-visa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Editpage2 (){
  const [state, setState] = useState(false);
    return (
        
    <div className='advance_settings_page'>
      <div className="left-pane">
        <Link to="/Library"><span className="close-setting">+</span></Link>
        <div className="settings-text">
          <h3 className="settings-header">Settings</h3>
          <p className="box-text">Profile</p>
          <p>Advanced Settings</p>
          <span className="hor-line"></span>
          <small className="coming">Coming soon...</small>
          <p className="box-text box-text2">Artist Settings</p>
          <p className="box-text box-text2">Royalty Splits</p>
          <p className="box-text box-text2">Payout Methods</p>
        </div>
      </div> 

       <div className="right-pane-text">
          <p>Profile Picture</p>
          <span className="profile-picture"></span>
          <button className="button-upload">Upload</button>
          <small className="small-jpg">jpg, png, gif 400*400 </small>
          <p className="username-txt">Username</p>
          <input type="text" className="username-input" placeholder="@usernametest" />
          <p className="saved-txt">Saved Payment Methods</p>
          <span className="payment-box">
            <input type="radio" className="radio-input" />
            <span className='visa-icon'>VISA</span>
            <div className="card-details">
              <p className="card-type">Credit</p>
              <p className="card-num">XXXX-XXXX-XXXX-000</p>
            </div>
          </span>
          <span className="payment-box">
            <input type="radio" className="radio-input" />
            <span className='visa-icon'>VISA</span>
            <div className="card-details">
              <p className="card-type">Debit</p>
              <p className="card-num">XXXX-XXXX-XXXX-000</p>
            </div>
          </span>
        </div>      
    </div>
    );
}
export default Editpage2;
