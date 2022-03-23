import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaInfoCircle } from 'react-icons/fa';

import "./Main.css";


function SongProfile5() {
  return (
    <div className="song-profile2">
    <div className="song-profile">
      {/* <style>{'body {background-image: linear-gradient(to right, #000000, #434343); }'}</style>  */}
      <Link to="/"><p className="cross">+</p></Link>
      <div className="container">
        <div className="song-info">
          <button type="button" name="button" className="streamalign" class="btn-primar3y stream">
            Stream
          </button>
          <h3>Song Title</h3>

          <h5>Artist Name</h5>

          <p><span className="info"><p> <FaInfoCircle/></p></span><span className="info1">Price:  </span> <span className="price-details">15.09 USDC</span></p>
          <p><span className="info"><p><FaInfoCircle/></p></span><span className="info1">Royalty%: </span><span className="price-details">5%</span></p>
          <p><span className="info"><p><FaInfoCircle/></p></span><span className="info1">Quantity: </span><span className="price-details">100 Tokens</span></p>
          <Link to="./NewPlaceBid"> <button className="newbidbtn">Edit</button></Link>
          <br />
          <Link to="./NewPlaceBid"> <button className="newbidbtn sell-now-btn">Buy Now</button></Link>  
        </div>
      </div>
      <div className="container2">
        <br />
        <span className="song-profile-img"> <img src={coverart} className="picio"   /></span>
        <br />
        <div className="genre-container">
          <p className="genre">Genre</p>
          <p className="date">July 14 2021</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SongProfile5;
