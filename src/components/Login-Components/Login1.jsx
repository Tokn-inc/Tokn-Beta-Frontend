import React,  {useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { login} from "../../redux";

function Login1() {

  const [detail, setDetail] = useState("");
  const [password, setPassword] = useState("");
  const address = useSelector((state) => state.wallet.address)
  const {error, loggedIn} = useSelector((state) => state.user)
    const dispatch = useDispatch()

  useEffect(() => {
    if(!address){
    // alert("Connect wallet first!")
    window.location = '/'
  } 
     if(loggedIn){
      
      window.location = "/home"
    }
     
      // dispatch(loginWithJWT(address))
  }, [])

  const userLogin = async (event) => {
    event.preventDefault()
    if(!address){
      // alert("Connect wallet first!");
      window.location = "/"
    }
    else{
      
        let user = {
          detail:detail,
          password,
          walletAddress: address
        }
        console.log(user);
        dispatch(login(user))
      
      
    }
    
    }
  return ( 
    <div className="central-div">
        <Link to="/"><span class="back login-back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>    
        <img src={logo} alt="Login logo" class="login-img" />
        <label htmlFor='username' className="login-label">Username or Email</label>
        <input id='username' type="text" name="" placeholder="Username or Email"  onChange={(event) => setDetail(event.target.value)}/>
        <div className="password-container">
          <label htmlFor='password' className="login-label">Password</label>
          <input id='password' type="password" name="" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
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
        <button type="button" name="button" class="btn-primary signin" onClick={userLogin}>Sign In</button>
        </Link>
        <br />
        <Link to="/create-profile"><a className="create-new">Create New Account</a></Link>
    </div>
  );
}

export default Login1;
