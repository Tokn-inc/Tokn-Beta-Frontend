import React from "react";
import './buynowcss.css';
import { Link, withRouter } from "react-router-dom";


function BuyNow() {
  return (
    <div className="App">
       
      <style>{'body { background-image: url("https://img5.goodfon.com/wallpaper/nbig/3/3f/steklo-kapli-voda-dozhd-neon.jpg"); }'}</style>
     <div className='outerboxb1'> 
     <div className='closeicon'>  </div>
   
     <div className='innerboxb1'><span>
       <p className="boxtext">Quantity:</p>
       <p className="boxtext">Total Royalties:</p>
       <p className="boxtext">Royalties per Token:</p></span>
       <div className='barb1' ><span>
       <p className="boxtext">- </p>
       <p className="boxtext">-</p>
       <p className="boxtext">-</p></span>
     </div>
     </div>
   <div  className='dragb1'>Buy Now</div>
   <div className='placeb1'><form>
    
  <label className='formsb1'>
    Quantity
    <input type="text" className='forumb1' placeholder="Eg: 2" name="name" />
  
  </label>
  <div className='jekb1b'><p>Max Quantity:</p> </div><div className='jek22b1'><p> 7</p> </div>
</form></div><Link to="/NewBuyNow"><button className='confirmbuttonbu'>Confirm</button></Link></div> 
<div >
    
   </div>
 
   </div>
  );
}

export default BuyNow;
