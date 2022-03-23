import React from "react";
import { Link, withRouter } from "react-router-dom";
import './sellnow.css';



function Sellnow()  {
 

  return (
    <div className="App">
       
      <style>{'body { background-image: url("https://wallpapersmug.com/large/a86d60/texture-colorufl-abstract.jpg"); }'}</style>
     <div className='outerboxs'> 
  
     <div className='closeicon'> </div>
   
     <div className='innerbox'><span>
       <p className="boxtext">Estimated Price:</p>
       <p className="boxtext">Total Royalties:</p>
       <p className="boxtext">Royalties per Token:</p></span>
       <div className='bar' ><span>
       <p className="boxtext">- </p>
       <p className="boxtext">-</p>
       <p className="boxtext">-</p></span>
     </div>
     </div>
   <div  className='drags1'>Sell Now</div>
   <div className='places1'><form>
  
  <label className='formssd'>
    Quantity
    <input type="text" className='forumsd' placeholder="Eg: 2" name="name" />
  
  </label>
  <div className='jek2sd'><p>Max Quantity:</p> </div><div className='jek22sd'><p> 7</p> </div>
</form></div>
    
    
   </div>
   <div ><button className='confirmbuttonssl'>Confirm</button></div> 
   </div>
  );
}

export default Sellnow;