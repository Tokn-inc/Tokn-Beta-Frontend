import React, {useEffect, useState} from "react"; 
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import {useSelector, useDispatch} from "react-redux"

import { AiFillHome } from 'react-icons/ai';

import { RiSearchLine } from 'react-icons/ri';

import { BiLibrary } from 'react-icons/bi';
import { logout } from "../../redux/user/userCreators";
function Navbar() {
  const [state, setState] = useState(true);
  const [username, setUsername] = useState("")
  const user = useSelector((state) => state.user.user)
  useEffect(() => {
    if(user){
      setUsername(user.username)
    }
  }, [])
 const dispatch = useDispatch()
  
 
 const handleLogout = async (event) => {
    event.preventDefault();
    dispatch(logout(username))
    
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
              <Link to="/home" className="menu-link">
                <div className="navtext-container2" id="home" onClick={homeClick} onMouseOver={homeHover} onMouseOut={homeOut}><AiFillHome className="navbar-icon2"/> <p id="homeText" className="linknavtext2">Home</p></div>
              </Link>
              <Link to="/search" className="menu-link">
                <div className="navtext-container2" id="search" onClick={searchClick} onMouseOver={searchHover} onMouseOut={searchOut}><RiSearchLine className="navbar-icon2"/> <p id="searchText" className="linknavtext2">Search</p></div>
              </Link>
              <Link to="/library" className="menu-link">
                <div className="navtext-container2" id="lib" onClick={libClick} onMouseOver={libHover} onMouseOut={libOut}><BiLibrary className="navbar-icon2"/> <p id="libText" className="linknavtext2">Library</p></div>
              </Link>
              {/* <div className='navblock'> <Link to="/search"  className="link"> <RiSearchLine /> <div className="linknavtext">Search </div></Link> </div> 
              <div className='navblock'>  <Link to="/library" className="link" ><BiLibrary /><div  className="linknavtext" >Library</div></Link> </div>  */}
            </div>
        
            {state && <Link to='/'><button type="button" name="button" class="btn-primary login logout" onClick={handleLogout}>Logout</button></Link>}
        </div>
  );

  function homeClick() {
    document.getElementById('home').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    document.getElementById('search').style.backgroundColor = "transparent";
    document.getElementById('lib').style.backgroundColor = "transparent";
    document.getElementById('home').style.color = "#24a2fd";
    document.getElementById('search').style.color = "#bbb";
    document.getElementById('lib').style.color = "#bbb";
    document.getElementById('homeText').style.color = "white";
    document.getElementById('searchText').style.color = "#bbb";
    document.getElementById('libText').style.color = "#bbb";
  }

  function searchClick() {
    document.getElementById('search').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    document.getElementById('home').style.backgroundColor = "transparent";
    document.getElementById('lib').style.backgroundColor = "transparent";
    document.getElementById('search').style.color = "#24a2fd";
    document.getElementById('home').style.color = "#bbb";
    document.getElementById('lib').style.color = "#bbb";
    document.getElementById('searchText').style.color = "white";
    document.getElementById('homeText').style.color = "#bbb";
    document.getElementById('libText').style.color = "#bbb";
  }

  function libClick() {
    document.getElementById('lib').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    document.getElementById('search').style.backgroundColor = "transparent";
    document.getElementById('home').style.backgroundColor = "transparent";
    document.getElementById('lib').style.color = "#24a2fd";
    document.getElementById('search').style.color = "#bbb";
    document.getElementById('home').style.color = "#bbb";
    document.getElementById('libText').style.color = "white";
    document.getElementById('searchText').style.color = "#bbb";
    document.getElementById('homeText').style.color = "#bbb";
  }

  function homeHover() {
    if(document.getElementById('home').style.backgroundColor != "rgba(255, 255, 255, 0.1)") {
      document.getElementById('home').style.color = "white";
      document.getElementById('homeText').style.color = "white";
    }
  }

  function searchHover() {
    if(document.getElementById('search').style.backgroundColor != "rgba(255, 255, 255, 0.1)") {
      document.getElementById('search').style.color = "white";
      document.getElementById('searchText').style.color = "white";
    }
  }

  function libHover() {
    if(document.getElementById('lib').style.backgroundColor != "rgba(255, 255, 255, 0.1)") {
      document.getElementById('lib').style.color = "white";
      document.getElementById('libText').style.color = "white";
    }
  }

  function homeOut() {
    if(document.getElementById('home').style.backgroundColor != "rgba(255, 255, 255, 0.1)") {
      document.getElementById('home').style.color = "#bbb";
      document.getElementById('homeText').style.color = "#bbb";
    }
  }

  function searchOut() {
    if(document.getElementById('search').style.backgroundColor != "rgba(255, 255, 255, 0.1)") {
      document.getElementById('search').style.color = "#bbb";
      document.getElementById('searchText').style.color = "#bbb";
    }
  }

  function libOut() {
    if(document.getElementById('lib').style.backgroundColor != "rgba(255, 255, 255, 0.1)") {
      document.getElementById('lib').style.color = "#bbb";
      document.getElementById('libText').style.color = "#bbb";
    }
  }
}

export default withRouter(Navbar);
 