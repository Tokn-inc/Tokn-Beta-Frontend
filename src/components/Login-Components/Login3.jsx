import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Login.css";

function Login3() {
  return (
    <div>
        <Link to="/create-profile"><span class="back login-back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>    
        <div className="central-div">
          <h1 className="kyc-header">KYC</h1>
          <label htmlFor="kyc-address" className="login-label">Address</label>
          <input id='kyc-address' type="text" name="" placeholder="0000 Street St" />
          <label htmlFor="kyc-city" className="login-label">City</label>
          <input id="kyc-city" type="password" name="" placeholder="City" />
          <label htmlFor="kyc-state" className="login-label">State</label>
          <input id="kyc-state" type="password" name="" placeholder="State" />
          <label htmlFor="kyc-country" className="login-label">Country</label>
          <input id='kyc-country' type="text" name="" placeholder="Country" />
          <label htmlFor="kyc-dob" className="login-label">Country</label>
          <span className="dob-container">
            <input id='kyc-dob' className="dob-day" type="text" name="" placeholder="Day" />
            <input id='kyc-dob' className="dob-month" type="text" name="" placeholder="Month" />
            <input id='kyc-dob' className="dob-year" type="text" name="" placeholder="Year" />
          </span>
          <label htmlFor="kyc-first" className="login-label">First Name</label>
          <input id='kyc-first' type="text" name="" placeholder="First" />
          <label htmlFor="create-last" className="login-label">Last Name</label>
          <input id='kyc-last' type="text" name="" placeholder="Last" />
          <label htmlFor="kyc-selfie" className="login-label label2">Selfie</label>
          <span id='kyc-selfie'></span>
          <span className='upload-btn'><p>Upload</p></span>
          <label htmlFor="kyc-id1" className="login-label label2">Identification</label>
          <span className="id-container">
            <span id="container-id1" className="id-half-container">
              <span id='kyc-id1' className="kyc-id-box"></span>
              <p>Driver's Licence</p>
            </span>
            <span className="id-half-container">
              <span className="kyc-id-box"></span>
              <p>Passport</p>
            </span>
            
          </span>
          <Link to="/home">
          <button type="button" name="button" class="btn-primary nextpage np3">Next Page</button>
          </Link>
        </div>
    </div>
  );
}

export default Login3;
