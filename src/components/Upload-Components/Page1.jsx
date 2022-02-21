import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Upload.css";
import upload from "../images/upload.png";

function Page1() {
  return (
    <div>
        <div className="status-bar">
            <div className="unactive-bar"><span className="status-circle active-sc"></span></div>
            <div className="unactive-bar"><span className="status-circle"></span></div>
            <div className="unactive-bar"><span className="status-circle"></span></div>
            <span className="status-circle"></span>
        </div>
        <Link to="/launch"><p className="upload-close">+</p></Link>
        <div className="status-desc"><p>Upload</p></div>
        <div className="white-container">
            <h5 className="track">Track Upload</h5>
            <div className="dotted-container">
                <img src={upload} alt="upload" class="upload-img" />
                <h5>Drag and Drop</h5>
                <p>browse from files</p>
            </div>
            <Link to="/song-info">
            <button type="button" name="button" class="btn-primary upload-btn page1-btn">
                Upload
            </button>
            </Link>
        </div>
    </div>
  );
}

export default Page1;
