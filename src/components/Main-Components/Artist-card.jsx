import React from "react";
import "./Main.css";

function Artist(props) {

  return (
    <div className="row-posterart artist-poster">
        <img className="artist-img" src={props.img} />
        <br />
        <p className=" artist artist2">{props.artist}</p>
    </div>
  );
}

export default Artist;
