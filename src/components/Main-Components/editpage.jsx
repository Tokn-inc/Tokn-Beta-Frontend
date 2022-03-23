import React from "react";
import './editpage.css';



function Editpage()  {
 

  return (
    <div className="App">
       
      <style>{'body { background-image: url("https://wallpapersmug.com/large/60cd8e/glass-surface-sunset-drops.jpg"); }'}</style>
     <div className='outerboxed'> 
  
     <div className='closeicon'> </div>
   
 
   <div  className='draged'>Edit</div>
   <div className='placeed'><form>
    <label className='formsed'>
    Strike Price
    <input type="text" className='forumed'  placeholder="Eg: $1000" name="name" />
  </label>
  <div className='jek1ed'><p>Max Price:</p> </div> <div className='jek11ed'><p> $2000.00</p> </div>
  <label className='formsed'>
    On Sale
    <input type="text" className='forumed' placeholder="Eg: 2" name="name" />
  
  </label>
  <div className='jek2ed'><p>Max Quantity:</p> </div><div className='jek22ed'><p> 7</p> </div>
  
</form>
</div>
    
    
   </div>
   <div ><button className='confirmbuttoned'>Confirm</button></div> 
   </div>
  );
}

export default Editpage;