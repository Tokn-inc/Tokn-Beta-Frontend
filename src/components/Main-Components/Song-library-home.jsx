import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibraryHome(props) {
  return (
    <div className="song-library">
    
        <div className="row-poster">
        <Link to="/NewSongProfile5">
        <img className="song-img" src={props.img} />
        <br />
        <p className="home lib-title">{props.title}</p>
        
        </Link>
        </div>
    </div>
  );
}

export default SongLibraryHome;
