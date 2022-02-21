import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function Song3(props) {
  return (
    <div className="songcard">
        <div className="row-poster">
        <Link to="/NewSongProfile1">
        <img className="song-img" src={props.img} />
        <br /><button className="presalebutton">Presale</button>
        <p className="home">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p>
      </Link></div>
    </div> 
  );
}

export default Song3;
