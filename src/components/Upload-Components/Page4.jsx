import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Upload.css";

function Page4() {
  return (
    <div className="upload-wrapper">
        <div className="status-bar">
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <span className="status-circle active-sc"></span>
        </div>
        <Link to="/launch"><p className="upload-close">+</p></Link>
        <div className="status-desc"><p>Distribution Information</p></div>
        <div className="white-container wc2 wc3">
            <Link to="/sale-info"><span class="back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>
            
            <p className="first-label"><span className="upload-info">&#8505;</span>Spotify Profile URL</p>
            <input type="text" className="upload-input" placeholder="eg: https://" />

            <p className="label"><span className="upload-info">&#8505;</span>Apple Profile URL</p>
            <input type="text" className="upload-input" placeholder="eg: https://" />
           
            <p className="label"><span className="upload-info">&#8505;</span>Selected Clip (TikTok)</p>
            <span className="time">
            <span className="label time-label">Start Time</span>
            <br />
            <input type="text" className="upload-input ui3" placeholder="Min:Sec" />
            </span>
            <span className="time">
            <span className="label time-label tl2">End Time</span>
            <br />
            <input type="text" className="upload-input ui3 ui-date" placeholder="Min:Sec" />
            </span>
            
            <p className="label"><span className="upload-info">&#8505;</span>Label<span className="optional">optional</span></p>
            <input type="text" className="upload-input" placeholder="eg: Universal" />
            
            <p className="label"><span className="upload-info">&#8505;</span>CD/Track Number<span className="optional">optional</span></p>
            <input type="text" className="upload-input" placeholder="eg: Universal" />
           
            <p className="label"><span className="upload-info">&#8505;</span>Collaboration<span className="optional">optional</span></p>
            <input type="text" className="upload-input ui5" placeholder="Default" />
            <input type="text" className="upload-input ui5 ui-date" placeholder="Storage Name" />
            <input type="text" className="upload-input ui5 ui-date" placeholder="Spotify URL" />
            <p className="collab"><span className="collab-plus">+</span>Add Collab</p>
           
            <p className="label"><span className="upload-info">&#8505;</span>Songwriters<span className="optional">optional</span></p>
            <input type="text" className="upload-input ui5" placeholder="Default" />
            <input type="text" className="upload-input ui5 ui-date" placeholder="First Name" />
            <input type="text" className="upload-input ui5 ui-date" placeholder="Last Name" />
            <p className="collab"><span className="collab-plus">+</span>Add Collab</p>

            <Link to="/confirm">
            <button type="button" name="button" class="btn-primary upload-btn page2-btn">
                Next Page
            </button>
            </Link>
        </div>
    </div>
  );
}

export default Page4;
