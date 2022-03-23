import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Upload.css";
import upload from "../images/upload.png";

function Page2() {
  return ( 
    <div className="upload-wrapper">
        <div className="status-bar">
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <div className="unactive-bar"><span className="status-circle active-sc"></span></div>
            <div className="unactive-bar"><span className="status-circle"></span></div>
            <span className="status-circle"></span>
        </div>
        <Link to="/launch"><p className="upload-close">+</p></Link>
        <div className="status-desc"><p>Song Information</p></div>
        <div className="white-container wc2">
            <Link to="/upload1"><span class="back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>
            <p className="first-label"><span className="upload-info">&#8505;</span>Cover Art</p>
            <div className="dotted-container dc2">
                <img src={upload} alt="upload" class="upload-img" />
                <h5>Drag and Drop</h5>
                <p>browse from files</p>
            </div>
            <p className="label"><span className="upload-info">&#8505;</span>Track Title</p>
            <input type="text" className="upload-input" placeholder="Song Name" />
            <p className="label"><span className="upload-info">&#8505;</span>Artist Name</p>
            <input type="text" className="upload-input default-input" placeholder="Set Default Name" disabled/>
            <p className="label"><span className="upload-info">&#8505;</span>Language</p>
            <input type="text" className="upload-input ui2" placeholder="Default" />
            <p className="label"><span className="upload-info">&#8505;</span>Genre</p>
            <input type="text" className="upload-input ui2" placeholder="Default" />

            <Link to="/sale-info">
            <button type="button" name="button" class="btn-primary upload-btn-new page2-btn-new">
                Confirm
            </button>
            </Link>
        </div>
    </div>
  );
}

export default Page2;
