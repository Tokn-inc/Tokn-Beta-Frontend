import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux";

function Login2() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [match, setMatch] = useState(true)
  const [confirm_password, setConfirm_password] = useState("")
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [validEmail, setValidEmail] = useState(true);
  const [validPass, setValidPass] = useState(true)
  const [terms, setTerms] = useState(false);
  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [term3, setTerm3] = useState(false);
  const [term4, setTerm4] = useState(false);

  var upperCaseLetters = /[A-Z]/g;
  var lowerCaseLetters = /[a-z]/g;
  var numbers = /[0-9]/g;
  var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
  var invalidChars = "<>/";
  const {error, loggedIn} = useSelector((state) => state.user)
  const address = useSelector((state) => state.wallet.address)
  const dispatch = useDispatch()
  

  useEffect(() => {
    if(loggedIn){
      alert("User already loggedIn!");
      window.location = "/home"
    }
  }, [])

  const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleEmailChange = (value) => {
    if(validateEmail(value)){
      setEmail(value) 
      setValidEmail(true)
    }else{
      setValidEmail(false)
    }
  }

   const handlePasswordChange = (value) => {
    setTerms(true);
    console.log("Here")
    
    if(value.length >= 6 ) {
      setTerm1(true);
    }else{
      setTerm1(false)
    }

    if(value.match(upperCaseLetters)) {
      setTerm2(true);
    }else{
      setTerm2(false)
    }

    if(value.match(lowerCaseLetters)) {
      setTerm3(true);
    }else{
      setTerm3(false)
    }

    if(value.match(numbers)) {
      setTerm4(true);
    }else{
      setTerm4(false)
    }

    if(value === "") {
      setTerms(false);
    }
    setPassword(value)
  
    if(value.length >= 6 && value.match(upperCaseLetters) && value.match(lowerCaseLetters) && value.match(numbers)){
      console.log("here 2");
      setValidPass(true)
    }else{
      setValidPass(false)
    }
    // if(validatePassword(event.target.value)){
    //    setPassword(event.target.value) 
    //   setValidPass(true)
    // }else{
    //   setPassword(event.target.value) 
    //   setValidPass(false)
    // }
    
  }

  const matchPasswords = (value) => {
   
    if(password === value){
      setConfirm_password(value) 
 
      setMatch(true)
    }else{
    
      
      setMatch(false)
    }
  }

  function register(event) {
    event.preventDefault();
    for (var i = 0; i < username.length; i++) {
    if (iChars.indexOf(username.charAt(i)) != -1) {
        alert ("Your username has special characters. \nThese are not allowed.\nPlease remove them and try again.");
        return
      
    }
  }
    for (var i = 0; i < firstName.length; i++) {
    if (iChars.indexOf(firstName.charAt(i)) != -1) {
        alert ("Your first name has special characters. \nThese are not allowed.\nPlease remove them and try again.");
        return
    }
  }

  for (var i = 0; i < lastName.length; i++) {
    if (iChars.indexOf(lastName.charAt(i)) != -1) {
        alert ("Your last name has special characters. \nThese are not allowed.\nPlease remove them and try again.");
        return
    }
  }
    for (var i = 0; i < email.length; i++) {
    if (invalidChars.indexOf(email.charAt(i)) != -1) {
        alert ("Your email has invalid characters. \n<,/,> are not allowed.\n Please remove them and try again.");
        return
    }
}
  for (var i = 0; i < password.length; i++) {
    if (invalidChars.indexOf(password.charAt(i)) != -1) {
        alert ("Your password has invalid characters. \n<,/,> are not allowed.\n Please remove them and try again.");
        return
    }
}
  console.log(validEmail, " ", validPass, " ", match);
       if(validEmail && validPass && match){
      
      let user = {
        username,
        email,
        password,
        confirm_password,
        firstName,
        lastName,
        avatar,
        address
      }
      dispatch(signup(user))
      // window.location = "/buy-now"
      
    
    }else{
      alert("Please fill all the fields properly.")
    }
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setAvatar(event.target.files[0]);
    }
  }
  return (
    <div>
        <Link to="/"><span class="back login-back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>    
        <div className="central-div">
          <h1 className="create-header">Create an Account</h1>
          <label htmlFor="create-username" className="login-label">Username</label>
          <input id='create-username' type="text" name="" placeholder="@username" onChange={(event) => {setUsername(event.target.value) }}/>
          <label htmlFor="create-password" className="login-label">Password</label>
          <input id="create-password" type="password" name="" placeholder="Password" onChange={(event)=> handlePasswordChange(event.target.value)}/>
          {terms && <div className="pswd-terms">
              {!term1 && <p className="pswd-red">Must contain at least 6 characters</p>}
              {term1 && <p className="pswd-green">Must contain at least 6 characters</p>}
              {!term2 && <p className="pswd-red">Must contain an uppercase alphabet</p>}
              {term2 && <p className="pswd-green">Must contain an uppercase alphabet</p>}
              {!term3 && <p className="pswd-red">Must contain a lowercase alphabet</p>}
              {term3 && <p className="pswd-green">Must contain a lowercase alphabet</p>}
              {!term4 && <p className="pswd-red">Must contain a number</p>}
              {term4 && <p className="pswd-green">Must contain a number</p>}
            </div>}
          <label htmlFor="create-confirm" className="login-label">Confirm Password</label>
          <input id="create-confirm" type="password" name="" placeholder="Confirm Password" onChange={(event) => matchPasswords(event.target.value)}/>
          {match ? null: <p className="valid-email-pass">Passwords do not match</p>}
          <label htmlFor="create-username" className="login-label">Email</label>
          <input id='create-username' type="text" name="" placeholder="Email ID..." onChange={(event) => handleEmailChange(event.target.value)}/>
          {validEmail ? null: <p className="valid-email-pass">Please enter a valid email</p>}
          
          <label htmlFor="profile-picture" className="login-label label2">Upload Profile Picture</label>
          <img src={avatar ? URL.createObjectURL(avatar): ""} alt="" id='profile-picture' />
            {/* <span className="profile-picture-inner"></span> */}
          {/* </img> */}
          <input type="file" name="myImage" onChange={onImageChange} id="picture"/>
          {/* <span id="picture" className='upload-btn'><p>Upload</p></span> */}
          <label htmlFor="create-first" className="login-label">First Name</label>
          <input id='create-first' type="text" name="" placeholder="First" onChange={(event) => setFirstName(event.target.value)}/>
          <label htmlFor="create-last" className="login-label">Last Name</label>
          <input id='create-last' type="text" name="" placeholder="Last" onChange={(event) => setLastName(event.target.value)}/>
          {/* <Link to="add-bio"> */}
          <button type="button" name="button" class="btn-primary nextpage np3" onClick={register}>Next Page</button>
          {/* </Link> */}
        </div>
    </div>
  );
}

export default Login2;
