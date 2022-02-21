import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Upload.css";

function Page5() {
  return (
    <div>
        <div className="status-bar">
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span>
        </div>
        <Link to="/launch"><p className="upload-close">+</p></Link>
        <div className="white-container wc2 wc3">
            <Link to="/distribution-info"><span class="back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>

            <p className="song-genre">Genre<span className="song-length">3m 54s</span></p>
            <span className="ito-poster"></span>

            <span className="artist-name">Artist Name</span>
            <span className="song-title">Song Title Investor Token1</span>

            <p className="label"><span className="upload-info">&#8505;</span>Initial Price</p>
            <input type="text" className="upload-input ui2 default-input" placeholder="$150.00" disabled />
            <p className="label"><span className="upload-info">&#8505;</span>Quantity</p>
            <input type="text" className="upload-input ui2 default-input" placeholder="10 Tokens" disabled />
            <p className="label"><span className="upload-info">&#8505;</span>Royalties per Token</p>
            <input type="text" className="upload-input ui2 default-input" placeholder="1%" disabled />
            <p className="label"><span className="upload-info">&#8505;</span>ITO Length</p>
            <input type="text" className="upload-input ui2 default-input" placeholder="Feb 13, 2022" disabled />
            <p className="label"><span className="upload-info">&#8505;</span>Commission per Resale</p>
            <input type="text" className="upload-input ui2 default-input" placeholder="5%" disabled />
            
            <Link to="/launch">
            <button type="button" name="button" class="btn-primary upload-btn page2-btn">
                Confirm
            </button>
            </Link>
        </div>
    </div>
  );
}

export default Page5;
