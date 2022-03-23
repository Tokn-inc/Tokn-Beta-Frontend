import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function LaunchQueue(props) {
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
      <p className="la-p">Launch Date:</p>
      <br />
      <p className="la-p gray-p">January 4, 2022</p>
      <button type="button" name="button" className='editbalign' class="btn-primary upload-btn edit-btn">
        Edit
      </button>
      </span>
    </div>
  );
}

export default LaunchQueue;
