import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import LaunchActive from "./LaunchActive";
import LaunchQueue from "./LaunchQueue";
import { FiSettings } from 'react-icons/fi';
import SongLibrary from "./Song-library";
import songDetails from "./Database/song-details";

function Launch() {
  return (
    <div className="library launch">
      <style>{'body { background-color: #131313; }'}</style>
    
      <div className="cover-pic ">

<div className="left-section">
  <div className="user-details">
    <span className="profile-pic"></span>
    <div className="alignuser"> 
      <h4>User Name</h4> 
      <h5>@username</h5>
      <Link to="/upload1">
        <button type="button" name="button" class="launch-upload-btn">
            Upload
        </button>
      </Link>
    </div> 
  </div>
  <div className="right-to-left">
    <div className="earning">Earnings:</div>
    <div className="baramount"><h4>$0.00</h4></div>
    <button className="withdrawbutton"> Withdraw</button>
  </div>
</div> 

<div className="right-section">

    <Link to="/editpage2"> <FiSettings className="iconset" style={{color: 'white', fontSize: '20px'}}/> </Link>
    <div className="earning">Earnings:</div>
    <div className="baramount"><h4>$0.00</h4></div>
    <button className="withdrawbutton"> Withdraw</button>

</div>

</div> 
<div id="profileNavbar">
        <p className="lib-link"><div className="naveffects">Profile</div></p>
        <p className="lib-link"><div className="naveffects">Collection</div></p>
        <Link to="/launch"><p className="lib-link launch-text"><div className="naveffects">Launch</div></p></Link>
      </div>
          
            <div className="row-posterslib">{songDetails.map(detail =>
            <SongLibrary
                key={detail.id}
                img={detail.img}
                title={detail.title}
                artist={detail.artist}
            />  
        )}</div>
    </div>
  );
}

export default Launch;
