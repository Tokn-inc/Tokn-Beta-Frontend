import React, {useState} from 'react';
import './editpage2.css';
import { CgClose } from 'react-icons/cg';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link, withRouter } from "react-router-dom";

function Editpage2 (){
  const [state, setState] = useState(false);
    return (
        
    <div className='advance_settings_page'>
       <div className='settingbar'>
       <Link to="/home"><div className='closeicons'><CgClose/></div></Link>
      <div className='headsetting'>Settings</div>
      {!state &&<div className='advancedsetting'onClick={() => setState(true)}><Link>Profile</Link></div>}
      {state &&<div className='advancedsetting'onClick={() => setState(false)}><Link>Profile</Link></div>}
      {state &&   <div className='advancedsetting'onClick={() => setState(false)}><Link>Advanced Settings</Link></div>}
      {!state &&<div className='advancedsetting' onClick={() => setState(true)}><Link>Advanced Settings</Link></div>}
</div>
{!state &&<div className='placeprofilebard'>
       <div className='headr'>Profile Picture </div>
     <div className='circle'> 

      <div className='placeu'><form>
    
  <label className='formsu'>
    Username
    <input type="text" className='forumu' placeholder="@usernametest" name="name" />
    
  </label>
  
</form></div><Link to="/upload"><button className='newuploadbutton'>Upload</button></Link></div> 
<div className="imagetextupload">jpg, png, gif 400x400</div>
</div>}
            <style>{'body { background-color:  #131313; }'}</style>
            {state &&   <div className="adjust">  <form >
        
    <label className='forms'>
    <div className='align1'> Email</div>
    <input type="text" className='forum' placeholder="email@email.com" name="name" /><div className='iconplacehold'><BsFillCheckCircleFill/></div>
      <div className='align1'>Phone Number</div>
      <div className='align2'>   <input type="text" className='forum' placeholder="+1(444)000-0000" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'>Artists Name</div><div className="artsitstext">this is the name we distribute your music as. Double check if this a decision you are certain with, your fans may have a difficult time finding new artsits name </div>
      <div className='align2'>  <input type="text" className='forum' placeholder="Artists Name" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'> First Name</div>
      <div className='align2'> <input type="text" className='forum' placeholder="First" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'> Middle Name</div>
      <div className='align2'>  <input type="text" className='forum' placeholder="Middle" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'>Last Name</div>
      <div className='align3'> <input type="text" className='forum' placeholder="Last" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'>Country</div>
      <div className='align2'>  <input type="text" className='forum' placeholder="United States" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'> Address line 1</div>
      <div className='align2'>   <input type="text" className='forum' placeholder="1122 Street Name St" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'>Address line 2</div>
      <div className='align2'>  <input type="text" className='forum' placeholder="" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'>State</div>
      <div className='align2'>  <input type="text" className='forum' placeholder="California" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'> Zip code</div>
      <div className='align2'>  <input type="text" className='forum' placeholder="00022" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
      <div className='align1'> Distribution Agreement</div>
      <div className='align3'> <input type="text" className='forum1' placeholder="Placeholder text" name="name" /><div className='iconplaceholderr'><BsFillCheckCircleFill/></div></div>
      
      <div className='placeboxdis'> <input type="checkbox" name="" value="" class="checkbox" />
      <div className='placeboxdiss'>I have read and agreed to the terms Tokn's distribution agreement.</div></div>
      <div className='align1'>Current Password</div>
      <div className='align3'>  <input type="text" className='forum' placeholder="" name="name" /><div className='iconplaceholder'><BsFillCheckCircleFill/></div></div>
    </label> 
 
  </form>
 
  <div className='button1'><button className='savebuttonn'>Save</button></div>
  <div className="detx">..  </div>
    
</div>}

 
        </div>
    );
}
export default Editpage2;
