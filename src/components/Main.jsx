import React from "react";
import {Route, Switch } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import "./Main-Components/Main.css";
import "./Main-Components/buynowcss.css";
import "./Main-Components/editpage.css";
import "./Main-Components/placebidcss.css";
import "./Main-Components/sellnow.css"; 
import "./Main-Components/editpage2.css";
import Navbar from "./Main-Components/Navbar";
import Home from "./Main-Components/Home";
import Search from "./Main-Components/Search";
import Library from "./Main-Components/Library";
import Library2 from "./Main-Components/Song-library2";
import Launch from "./Main-Components/Launch";
import Sellnow from "./Main-Components/sellnow.jsx";
import Editpage from "./Main-Components/editpage.jsx";
import PlaceBid from "./Main-Components/PlaceBid.jsx";
import BuyNow from "./Main-Components/BuyNow.jsx";
import Editpage2 from "./Main-Components/editpage2.jsx";
import NewPlaceBid from "./Main-Components/NewPlaceBid.jsx";
import BuyNowNew from "./Main-Components/BuyNowNew.jsx";
import NewSongProfile from "./Main-Components/NewSongProfile.jsx";
import NewSongProfile2 from "./Main-Components/NewSongProfile2.jsx";
import NewSongProfile3 from "./Main-Components/NewSongProfile3.jsx";
import NewSongProfile4 from "./Main-Components/NewSongProfile4.jsx";



function Main() {
  return (
    <BrowserRouter>
    <div className="main-div">
        <div className="main-body"></div>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/search" exact component={() => <Search />} />
          <Route path="/library" exact component={() => <Library />} />
          <Route path="/library2" exact component={() => <Library2 />} />
          <Route path="/NewPlaceBid" exact component={() => <NewPlaceBid />} />
          <Route path="/BuyNowNew" exact component={() => <BuyNowNew />} /> 
          <Route path="/Search" exact component={() => <Search />} /> 
          <Route path="/launch" exact component={() => <Launch />} />
          <Route path="/NewSongProfile" exact component={() => <NewSongProfile />} />
          <Route path="/NewSongProfile2" exact component={() => <NewSongProfile2 />} />
          <Route path="/NewSongProfile3" exact component={() => <NewSongProfile3 />} />
          <Route path="/NewSongProfile4" exact component={() => <NewSongProfile4 />} />
          <Route path="/placebidMain" exact component={() => <PlaceBid />} />
          <Route path="/sellnowMain" exact component={() => <Sellnow />} />
          <Route path="/editpageMain" exact component={() => <Editpage />} />
          <Route path="/buynowMain" exact component={() => <BuyNow />} />
          <Route path="/editpage2" exact component={() => <Editpage2 />} />
        </Switch>
        
    </div></BrowserRouter>
  );
}

export default Main;
