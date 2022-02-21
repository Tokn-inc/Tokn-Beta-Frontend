import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaInfoCircle } from 'react-icons/fa';


import "./Main.css";


function NewPlaceBid() {
  return (
    <div className="song-profile">
        
      <style>{'body { background-color: #131313; }'}</style>
        <Link to="/"><p className="cross">+</p></Link>
        
<div className='moveplacebid'>
        <div className="containerp1">
            <div className="song-infos">
                <h3>Song Title</h3>
                <span className="song-profile-artist-img"></span>
                <h7>Artist Name</h7>
                <br />
            
                <div className='placepp1p'><form>
    <label className='formsp1p'>
    Bid
    <input type="text" className='inputplace'  placeholder="Eg: $1000" name="name" />
  </label>
  <div className='Maxp'>Max Price: </div> <div className='maxp1'> $2000.00 </div>
  <label className='formsp1'>
    Quantity
    <input type="text" className='inputplace' placeholder="Eg: 2" name="name" />
  
  </label>
  <div className='Quan'>Max Quantity: </div><div className='Quan1'> 7
  </div>
</form>
</div>
<div className="royaltotal"><div class="royaltotaltext"><div className="Royalplace">Royalties:</div>
<div className="Totalplace">Total Price:</div></div></div>
<div ><button className='confirmbuttonp12'>Confirm</button></div> 
    </div>          
            </div>
            <div className="containerp2">
            
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



export default NewPlaceBid;