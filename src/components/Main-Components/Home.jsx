import React from "react"; 
import "./Main.css";
import  {useState} from "react";
import Song from "./Song-card";
import Song2 from "./Song-card2";
import songfix from "./Database/song-details2";
import songDetails from "./Database/song-details";
import SongLibrary from "./Song-library";
import hamburger from '../images/Hamburger.png';
import { AiFillHome } from 'react-icons/ai';
import { RiSearchLine } from 'react-icons/ri';
import { BiLibrary } from 'react-icons/bi';
import { Link, withRouter } from "react-router-dom";


function createSong(detail) {
    return (
        <Song
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist}
        />     
    );
}

function createSong2(detail) {
    return (
         
        <Song2
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist}
        />     
    );
}

function mobileMenu () {
    if(document.querySelector(".mobile-menu").style.display == "none")
    document.querySelector(".mobile-menu").style.display = "flex";
    else
    document.querySelector(".mobile-menu").style.display = "none";
}

function Home() {
    
    const [state, setState] = useState(false);
  return ( 
    <div className="home">  
        <style>{'body { background-color: #131313; }'}</style>
        {/* <img src={hamburger} className="hamburger" alt="hamburger menu" onClick={mobileMenu} /> */}
        <div className="mobile-navbarNew">
              <Link to="/home">
                <div className="navtext-container"><AiFillHome className="navbar-icon"/> <p className="linknavtext">Home</p></div>
              </Link>
              <Link to="/search">
                <div className="navtext-container"><RiSearchLine className="navbar-icon"/> <p className="linknavtext">Search</p></div>
              </Link>
              <Link to="/library">
                <div className="navtext-container"><BiLibrary className="navbar-icon"/> <p className="linknavtext">Library</p></div>
              </Link>
        </div>
        {/* <div className="mobile-menu">
              <Link to="/home">
                <div className="navtext-container"><AiFillHome className="navbar-icon"/> <p className="linknavtext">Home</p></div>
              </Link>
              <Link to="/search">
                <div className="navtext-container"><RiSearchLine className="navbar-icon"/> <p className="linknavtext">Search</p></div>
              </Link>
              <Link to="/library">
                <div className="navtext-container"><BiLibrary className="navbar-icon"/> <p className="linknavtext">Library</p></div>
              </Link>
        </div> */}
        <h6>Featured</h6>
     <Link to="./NewSongProfile3">   <div className="featuredbar"></div></Link>
        <h6>Explore</h6>
        <div className="row-posters" >  {songDetails.map(createSong)}</div>
        <div className="row-posters" >  {songfix.map(createSong2 )}</div>   
        <div className="row-posters">{songDetails.map(detail =>
            <SongLibrary
                key={detail.id}
                img={detail.img}
                title={detail.title}
                artist={detail.artist}
            />  
        )}</div>
    </div>
  );
}

export default Home;
