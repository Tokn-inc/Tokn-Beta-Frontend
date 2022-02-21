import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function LaunchActive(props) {
  return (
    <div className="launch-active">
      
      <span className="launch-img"></span>

      <span className="la-span1">
      <h3 className="la-song-title">Song Title</h3>
      <br />
      <p className="la-p gray-p">Artist Name</p>
      <span className="partition"></span>
      </span>

      <span className="la-span2">
      <p className="la-p">Earnings:</p>
      <br />
      <p className="la-p gray-p">$--</p>
      <br />
      <br />
      <p className="la-p">Countdown:</p>
      <br />
      <p className="la-p gray-p">10 Days</p>
      </span></div>
    
  );
}

export default LaunchActive;
