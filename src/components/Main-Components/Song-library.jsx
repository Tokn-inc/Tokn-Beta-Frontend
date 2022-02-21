import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibrary(props) {
  return (
    <div className="song-library">
    
        <div className="row-poster">
        <Link to="/NewSongProfile4">
        <img className="song-img" src={props.img} />
        <br />
        <p className="home">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p>
        </Link>
        </div>
    </div>
  );
}

export default SongLibrary;
