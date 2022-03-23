import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import SongLibrary from "./Song-library";
import SongLibrary2 from "./Song-library2";

import upload from "../images/upload.png";

import songDetails from "./Database/song-details";
import { FiSettings } from 'react-icons/fi';


function Library() {  
  return (
    <div className="library">
      <style>{'body { background-color: #131313; }'}</style>
    
      <div className="cover-pic">

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

      {/* <div id="profileNavbar">
        
        <Link to="" className="lib-link"><h6>Profile</h6></Link>
        <Link to="" className="lib-link"><h6>Collection</h6></Link>
        <Link to="/launch" className="lib-link"><h6>Launch</h6></Link> 
      </div> */}

      <div id="profileNavbar">
        <p className="lib-link"><div className="naveffects">Profile</div></p>
        <p className="lib-link"><div className="naveffects">Collection</div></p>
        <Link to="/launch" className="navactive"><p className="lib-link launch-text"><div className="naveffects">Launch</div></p></Link>
      </div>

        <div className="navlinebar">

       

            <div className="row-posterslib">{songDetails.map(detail =>
            <SongLibrary
                key={detail.id}
                img={detail.img}
                title={detail.title}
                artist={detail.artist}
            />  
        )}</div>

        </div>
       
    </div>
  );
}

export default Library;
