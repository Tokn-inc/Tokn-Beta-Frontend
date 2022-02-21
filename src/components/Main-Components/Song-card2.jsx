import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function Song2(props) {
  return (
    <div className="songcard">
        <div className="row-poster">
        <Link to="/NewSongProfile">
        <img className="song-img" src={props.img} />
        <br /><button className="presalebutton">Presale</button>
        <br /><p className="home">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p>
      </Link></div>
    </div> 
  );
}

export default Song2;
