import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Login1() {
  return ( 
    <div className="central-div">
        <Link to="/"><span class="back login-back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>    
        <img src={logo} alt="Login logo" class="login-img" />
        <label htmlFor='username' className="login-label">Username</label>
        <input id='username' type="text" name="" placeholder="Username or Email" />
        <div className="password-container">
          <label htmlFor='password' className="login-label">Password</label>
          <input id='password' type="password" name="" placeholder="Password" />
          <div className="check-row">
            <div className="check-row-inner">
              <input type="checkbox" name="" value="" class="checkbox" />
              <p className="small remember">Remember me</p>
            </div>
            <p className="small forgot">Forgot password?</p>
          </div>
        </div>      
        <br />
        <Link to="/home">
        <button type="button" name="button" class="btn-primary signin">Sign In</button>
        </Link>
        <br />
        <Link to="/create-profile"><a className="create-new">Create New Account</a></Link>
    </div>
  );
}

export default Login1;
