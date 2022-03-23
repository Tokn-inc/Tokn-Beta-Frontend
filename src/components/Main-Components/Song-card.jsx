import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function Song(props) {
  return (
    <div className="songcard">
      
    
        <div className="row-poster">
        <Link to="/NewSongProfile3" className="sold-card">
        <img className="song-img" src={props.img} />
        <br /><button className="soldoutbutton">Soldout</button>
        <br /><p className="home home-title">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p>
      </Link></div>
    </div> 
  );
}

export default Song;
