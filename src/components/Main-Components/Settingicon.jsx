import React from "react";
import {Link, withRouter} from "react-router";
import './Settingbar.css';
import { CgClose } from 'react-icons/cg';


function Settingicon() {

  return (
    <div className="App"> 
  
      <div className='settingsbar'>
      <div className='cgicon'><CgClose/></div>
      <div className='headsettings'>Settings</div>
    <div className='advancedsettings'><Link to={"./App1"}>Profile</Link></div>
     <div className='advancedsettings'><Link>Advanced Settings</Link></div>
     
</div>
       <style>{'body { background-color:  red; }'}</style>
   

           <div class="sidenav">
   <div className='arrange'>
   <li> <a href="#">Home</a></li>
   <li> <a href="#">Search</a></li>
   <li> <a href="#">Libary</a></li></div>
          </div>

  <div className='placeprofile'>
       <div className='head'>Profile Picture </div>
     <div className='circle'> 

   <div className='place'><form>
    
  <label className='forms'>
    Username
    <input type="text" className='forum' placeholder="@usernametest" name="name" />
    
  </label>
  
</form></div><button className='newuploadbutton'>Upload</button></div> 
</div>

   </div>
  );
}

export default Settingicon;
