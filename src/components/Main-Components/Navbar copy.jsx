import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom"; 
import "./Main.css";
import ToknHome from "../images/NavIcons/Home/ToknHome.png";
import ToknSearch from "../images/NavIcons/Search/ToknSearch.png";
import ToknLibrary from "../images/NavIcons/Library/ToknLibrary.png";
import ToknHomeBlue from "../images/NavIcons/Home/ToknHomeBlue.png";
import ToknSearchBlue from "../images/NavIcons/Search/ToknSearchBlue.png";
import ToknLibraryBlue from "../images/NavIcons/Library/ToknLibraryBlue.png";
function Navbar() {
  const [state, setState] = useState(true);
  const [iconh, changeiconh] = useState(true);
  const [icons, changeicons] = useState(true);
  const [iconl, changeiconl] = useState(true);
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
          <div className="link" ><Link className="link"  to="/home"> {iconh && <img src={ToknHome}  alt="ToknHome"  className="nav-images" onClick={() => changeiconh(false)}/> } {!iconh &&<img src={ToknHomeBlue}  alt="ToknHomeBlue" onClick={() => changeiconh(true)} className="nav-images"/>}Home</Link></div>
          <div className="link"  ><Link  className="link"  to="/search"> {icons && <img src={ToknSearch} alt="ToknSearch" className="nav-images"  onClick={() => changeicons(false)}/>}{!icons &&<img src={ToknSearchBlue} alt="ToknSearchBlue" onClick={() => changeicons(true)} className="nav-images"  />}Search</Link></div>
          <div className="link" ><Link  className="link" to="/library">{iconl && <img src={ToknLibrary} alt="ToknLibrary"  className="nav-images" onClick={() => changeiconl(false)}/>}{!iconl &&<img src={ToknLibraryBlue}  alt="ToknLibraryBlue" onClick={() => changeiconl(true)} className="nav-images" />}Library</Link></div>
        </div>
          {state && <button type="button" name="button" class="btn-primary login logout" onClick={() => setState(false)}>Logout</button>}
        </div>
  );
}

export default withRouter(Navbar);
 