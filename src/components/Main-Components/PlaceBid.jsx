import React from "react";
import { Link, withRouter } from "react-router-dom";
import './placebidcss.css';



function PlaceBid()  {
 

  return (
    <div className="App">
       
      <style>{'body { background-image: url("https://wallpapersmug.com/large/bf88c5/drops-blur-neon.jpg"); }'}</style>
     <div className='outerboxp1'> 
  
     <div className='closeicon'> </div>
   
     <div className='innerboxP1'><span>
       <p className="boxtext">Quantity:</p>
       <p className="boxtext">Total Royalties:</p>
       <p className="boxtext">Royalties per Token:</p></span>
       <div className='bar' ><span>
       <p className="boxtext">- </p>
       <p className="boxtext">-</p>
       <p className="boxtext">-</p></span>
     </div>
     </div>
   <div  className='dragp1'>Place Bid</div>
   <div className='placepp1'><form>
    <label className='formsp1'>
    Bid
    <input type="text" className='forump1'  placeholder="Eg: $1000" name="name" />
  </label>
  <div className='jek1p'><p>Max Price:</p> </div> <div className='jek11p'><p> $2000.00</p> </div>
  <label className='formsp1'>
    Quantity
    <input type="text" className='forump1' placeholder="Eg: 2" name="name" />
  
  </label>
  <div className='jekmax'><p>Max Quantity:</p> </div><div className='jek22p'><p> 7</p> 
  </div>
</form>
<div ><button className='confirmbuttonp1'>Confirm</button></div> </div>
    
    
   </div>
   
   </div>
  );
}

export default PlaceBid;