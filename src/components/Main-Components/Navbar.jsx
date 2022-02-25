import React, {useState} from "react"; 
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import {useSelector, useDispatch} from "react-redux"

import { AiFillHome } from 'react-icons/ai';

import { RiSearchLine } from 'react-icons/ri';

import { BiLibrary } from 'react-icons/bi';
import { logoutSuccess } from "../../redux/user/userCreators";
function Navbar() {
  const [state, setState] = useState(true);
  const username = useSelector((state) => state.user.user.username)
 const dispatch = useDispatch()
  const logout = (event) => {
    event.preventDefault();
    dispatch(logoutSuccess)
    alert("Logout Successful.")
    window.location = "/"
  }
  return ( 
     
      <div class="side-navbar">
        <div className="hovereffect">
          <div className="nav-circle"></div>
          <br />
          <Link to="/">
          {!state && <button type="button" name="button" class="btn-primary login" onClick={() => setState(true)}>Login</button>}
          </Link>
          {state && <p class="username user">User Name</p>}
          {state && <p class="user-id user">@{username}</p>}
          <br /></div>
            <div class="discover">
              <Link to="/home">
                <div className="navtext-container2"><AiFillHome className="navbar-icon2"/> <p className="linknavtext2">Home</p></div>
              </Link>
              <Link to="/search">
                <div className="navtext-container2"><RiSearchLine className="navbar-icon2"/> <p className="linknavtext2">Search</p></div>
              </Link>
              <Link to="/library">
                <div className="navtext-container2"><BiLibrary className="navbar-icon2"/> <p className="linknavtext2">Library</p></div>
              </Link>
              {/* <div className='navblock'> <Link to="/search"  className="link"> <RiSearchLine /> <div className="linknavtext">Search </div></Link> </div> 
              <div className='navblock'>  <Link to="/library" className="link" ><BiLibrary /><div  className="linknavtext" >Library</div></Link> </div>  */}
            </div>
        
            {state && <Link to='/'><button type="button" name="button" class="btn-primary login logout" onClick={logout}>Logout</button></Link>}
        </div>
  );
}

export default withRouter(Navbar);
 