import React, {useState} from "react";
import "./Main.css";
import songDetails from "./Database/song-details";
import songDetails2 from "./Database/song-details2";
import artist from "./Database/artist";

import Song from "./Song-card";
import songfix from "./Database/song-details2";
import trending from "./Database/trending";
import designed from "./Database/designed";
import Song2 from "./Song-card2";
import Artist from "./Artist-card";

function Search() {

  const [searchTerm, setSearchTerm] = useState("");
 
  return (
    <div className="home" >
      <style>{'body { background-color: #131313; }'}</style>
      <input
        className="search-input"
        type="text"
        name=""
        placeholder="Artists, Songs, Tokens, Usernames..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="search-result">
      {songDetails.filter((val) => {
        if (searchTerm == "") {
          return ""
        }
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <Song
            key={val.id}
            img={val.img}
            title={val.title}
            artist={val.artist}
        /> 
        );
      })}
      </div>
      <div className="search-result">
      {songfix.filter((val) => {
        if (searchTerm == "") {
          return ""
        }
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <Song2
            key={val.id}
            img={val.img}
            title={val.title}
            artist={val.artist}
        /> 
        );
      })}
      </div>
      <div className="search-result">
      {trending.filter((val) => {
        if (searchTerm == "") {
          return ""
        }
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <Song
            key={val.id}
            img={val.img}
            title={val.title}
            artist={val.artist}
        /> 
        );
      })}
      </div>
      <div className="search-result">
        
      {designed.filter((val) => {
        if (searchTerm == "") {
          return "" 
        }
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <Song
            key={val.id}
            img={val.img}
            title={val.title}
            artist={val.artist}
        /> 
        );
      })}
      </div>
      <div className="search-result search-artist">
      {artist.filter((val) => {
        if (searchTerm == "") {
          return ""
        }
        else if (val.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <Artist
            key={val.id}
            img={val.img}
            artist={val.artist}
        /> 
        );
      })}
      </div>
      <br />
      <br />
      {searchTerm == "" && <h1 className="title">Search</h1>}
    </div>
  );
}

export default Search;
