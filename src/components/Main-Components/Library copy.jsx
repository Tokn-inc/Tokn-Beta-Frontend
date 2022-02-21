import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import SongLibrary from "./Song-library";
import Editpage2 from "./editpage2";
import upload from "../images/upload.png";
import songDetails from "./Database/song-details";
import { FiSettings } from 'react-icons/fi';


function Library() {
  return (
    <div className="library">
      <style>{'body { background-color: #131313; }'}</style>
     <div  className="settingsicon">     <Link to="/editpage2">
    <FiSettings style={{color: 'white', fontSize: '20px'}}/> </Link></div>
    <span className="cover-pic">
            <div className="alignuser">
            <h1>User Name</h1> 
            <h5>@username</h5></div>
        </span>
        <span className="profile-pic"></span>
        <span className="profile-nav">
        
            
            <p>Profile</p>
            <p>Collection</p>
            
            <Link to="/launch"><p>Launch</p></Link>
            <Link to="/upload1">
            <button type="button" name="button" class="launch-upload-btn">
                <img src={upload} alt="upload" class="launch-upload-img" />
                Upload
            </button></Link>
        </span>
        <div className="screensize">
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
