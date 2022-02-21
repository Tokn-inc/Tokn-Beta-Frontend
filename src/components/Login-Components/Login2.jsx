import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Login.css";

function Login2() {
  return (
    <div>
        <Link to="/username"><span class="back login-back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>    
        <div className="central-div">
          <h1 className="create-header">Create an Account</h1>
          <label htmlFor="create-username" className="login-label">Username</label>
          <input id='create-username' type="text" name="" placeholder="@username" />
          <label htmlFor="create-password" className="login-label">Password</label>
          <input id="create-password" type="password" name="" placeholder="Password" />
          <label htmlFor="create-confirm" className="login-label">Confirm Password</label>
          <input id="create-confirm" type="password" name="" placeholder="Confirm Password" />
          <label htmlFor="create-username" className="login-label">Email</label>
          <input id='create-username' type="text" name="" placeholder="Email ID..." />
          <label htmlFor="profile-picture" className="login-label label2">Upload Profile Picture</label>
          <span id='profile-picture'>
            <span className="profile-picture-inner"></span>
          </span>
          <span className='upload-btn'><p>Upload</p></span>
          <label htmlFor="create-first" className="login-label">First Name</label>
          <input id='create-first' type="text" name="" placeholder="First" />
          <label htmlFor="create-last" className="login-label">Last Name</label>
          <input id='create-last' type="text" name="" placeholder="Last" />
          <Link to="add-bio">
          <button type="button" name="button" class="btn-primary nextpage np3">Next Page</button>
          </Link>
        </div>
    </div>
  );
}

export default Login2;
