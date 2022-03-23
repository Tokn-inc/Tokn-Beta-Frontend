import React, {useState} from "react"; 
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

import { AiFillHome } from 'react-icons/ai';

import { RiSearchLine } from 'react-icons/ri';

import { BiLibrary } from 'react-icons/bi';
function Navbar() {
  const [state, setState] = useState(true);
 
 
  return ( 
     
      <div class="side-navbar">
        <div className="hovereffect">
     <div className="nav-circle"></div>
        <br />
        <Link to="/">
        {!state && <button type="button" name="button" class="btn-primary login" onClick={() => setState(true)}>Login</button>}
        </Link>
        {state && <p class="username user">User Name</p>}
        {state && <p class="user-id user">@username</p>}
        <br /></div>
        <div class="discover">
        <div className='navblock'> <Link to="/home"  className="link"><AiFillHome /> <div  className="linknavtext">Home </div></Link></div> 
        <div className='navblock'> <Link to="/search"  className="link"> <RiSearchLine /> <div className="linknavtext">Search </div></Link> </div> 
        <div className='navblock'>  <Link to="/library" className="link" ><BiLibrary /><div  className="linknavtext" >Library</div></Link> </div> 
        </div>
          {state && <Link to='/'><button type="button" name="button" class="btn-primary login logout" onClick={() => setState(false)}>Logout</button></Link>}
        </div>
  );
}

export default withRouter(Navbar);
 