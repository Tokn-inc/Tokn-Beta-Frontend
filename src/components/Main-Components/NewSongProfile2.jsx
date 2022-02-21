import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaInfoCircle } from 'react-icons/fa';

import "./Main.css";


function NewSongProfile2() {
  return (
    <div className="song-profile">
        
      <style>{'body { background-color: #131313; }'}</style>
        <Link to="/"><p className="cross">+</p></Link>
        

        <div className="container">
            
            <div className="song-info">
            <button type="button" name="button" class="btn-primar3y stream">
                Stream
            </button>
                <h3>Song Title</h3>
                <span className="song-profile-artist-img"></span>
                <h5>Artist Name</h5>
                <br />
            
                <p><span className="info"><p> <FaInfoCircle/></p></span>Price: <span className="price-details">15.09 USDC</span></p>
                <p><span className="info"><p><FaInfoCircle/></p></span>Royalty%: <span className="price-details">5%</span></p>
                <p><span className="info"><p><FaInfoCircle/></p></span>Quantity: <span className="price-details">100 Tokens</span></p>
                <button className="songcardbuynows1">Edit</button>
                <br></br><br></br>
                <button className="songcardbuynows">Sell Now</button>
              
            </div>
            <div className="container2">
            
            <br />
            <span className="song-profile-img"></span>
            <br />
            <p className="genre">Genre</p>
            <p className="date">July 14 2021</p>
        </div>
        </div>
    </div>
  );
}

export default NewSongProfile2;
