import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Upload.css";

function Page3() {
  return (
    <div className="upload-wrapper">
        <div className="status-bar">
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <div className="active-bar"><span className="status-circle completed-sc"><FontAwesomeIcon className="fa-check" icon={faCheck} /></span></div>
            <div className="unactive-bar"><span className="status-circle active-sc"></span></div>
            <span className="status-circle"></span>
        </div>
        <Link to="/launch"><p className="upload-close">+</p></Link>
        <div className="status-desc"><p>Sale Information</p></div>
        <div className="white-container wc2 wc3">
            <Link to="/song-info"><span class="back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>
            <p className="first-label"><span className="upload-info">&#8505;</span>On Sale Royalties</p>
            <input type="text" className="upload-input" placeholder="eg: 20%" />
            <p className="label"><span className="upload-info">&#8505;</span>Period of Royalties</p>
            <input type="text" className="upload-input default-input" placeholder="Lifetime" disabled/>
            <p className="label"><span className="upload-info">&#8505;</span>Token Quantity</p>
            <input type="text" className="upload-input" placeholder="eg: 10" />
            <p className="label"><span className="upload-info">&#8505;</span>On Sale Tokens</p>
            <input type="text" className="upload-input" placeholder="eg: 10" />
            <p className="label"><span className="upload-info">&#8505;</span>Initial Token Price</p>
            <input type="text" className="upload-input" placeholder="eg: 10" />
            <p className="label"><span className="upload-info">&#8505;</span>Release Date</p>
            <input type="text" className="upload-input ui3" placeholder="Month" />
            <input type="text" className="upload-input ui4 ui-date" placeholder="Day" />
            <input type="text" className="upload-input ui3 ui-date" placeholder="Year" />
            <p className="label"><span className="upload-info">&#8505;</span>ITO Release Date</p>
            <input type="text" className="upload-input ui3" placeholder="Month" />
            <input type="text" className="upload-input ui4 ui-date" placeholder="Day" />
            <input type="text" className="upload-input ui3 ui-date" placeholder="Year" />
            <p className="label"><span className="upload-info">&#8505;</span>ITO Release Time</p>
            <input type="text" className="upload-input ui3" placeholder="00:00" />
            <p className="label"><span className="upload-info">&#8505;</span>Timezone</p>
            <input type="text" className="upload-input ui2" placeholder="Default" />

            <Link to="/distribution-info">
            <button type="button" name="button" class="btn-primary upload-btn page2-btn">
                Next Page
            </button>
            </Link>
        </div>
    </div>
  );
}

export default Page3;
