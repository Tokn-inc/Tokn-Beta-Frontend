import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Upload.css";
import upload from "../images/upload.png";
import axios from "axios";

function Page2() {
    const [coverArt, setCoverArt] = useState(null);
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [language, setLanguage] = useState("");
    const [genre, setGenre] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault()
        let songData = {
            coverArt,
            title, 
            artist,
            language,
            genre
        }
        axios.post("/addNewSong", songData).then((response) => {
            console.log(response);
            window.location = "/sale-info"
        }).catch(err => {
            console.log(err);
        })
    }

    function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setCoverArt(event.target.files[0]);
    }
  }
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
        <form className="white-container wc2">
            <Link to="/upload1"><span class="back"> <FontAwesomeIcon className="back-icon" icon={faAngleLeft} /> </span></Link>
            <p className="first-label"><span className="upload-info">&#8505;</span>Cover Art</p>
            <div className="dotted-container dc2">
                <img src={upload} alt="upload" class="upload-img" />
                <h5>Drag and Drop</h5>
                <p>browse from files</p>
                <input type="file" name="myImage" onChange={onImageChange} id="picture"/>
            </div>
            <label for="track-title" className="label"><span className="upload-info">&#8505;</span>Track Title</label>
            <input type="text" id="track-title" className="upload-input" placeholder="Song Name" onChange={(event) => setTitle(event.target.value)}/>
            <label for="artist-name" className="label"><span className="upload-info">&#8505;</span>Artist Name</label>
            <input type="text" id="artist-name" className="upload-input default-input" placeholder="Set Default Name" disabled/>
            <label for="language" className="label"><span className="upload-info">&#8505;</span>Language</label>
            <input id="language" type="text" className="upload-input ui2" placeholder="Default" />
            <label for="genre" className="label"><span className="upload-info">&#8505;</span>Genre</label>
            <input type="text" id="genre" className="upload-input ui2" placeholder="Default" />

            <Link to="/sale-info">
            <button type="button" name="button" class="btn-primary upload-btn-new page2-btn-new" onClick={handleFormSubmit}>
                Confirm
            </button>
            </Link>
        </form>
    </div>
  );
}

export default Page2;
