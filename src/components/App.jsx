import React from "react";
import {Route, Switch } from "react-router-dom";
import Main from "./Main.jsx"
import Upload from "./Upload.jsx"
import Login from "./Login.jsx"
import PlaceBid from "./Main-Components/PlaceBid.jsx";
import BuyNow from "./Main-Components/BuyNow.jsx";
import Sellnow from "./Main-Components/sellnow.jsx";
import Editpage from "./Main-Components/editpage.jsx";
import Editpage2 from "./Main-Components/editpage2.jsx";
import NewPlaceBid from "./Main-Components/NewPlaceBid.jsx";
import BuyNowNew from "./Main-Components/BuyNowNew.jsx";
import NewSongProfile from "./Main-Components/NewSongProfile4.jsx";
import NewSongProfile2 from "./Main-Components/NewSongProfile2.jsx";
import NewSongProfile3 from "./Main-Components/NewSongProfile3.jsx";
import NewSongProfile4 from "./Main-Components/NewSongProfile4.jsx";
import Page1 from './Upload-Components/Page1.jsx';
import Page2 from './Upload-Components/Page2.jsx';
import Page3 from './Upload-Components/Page3.jsx';
import Page4 from './Upload-Components/Page4.jsx';
import Page5 from './Upload-Components/Page5.jsx';

function App() {
  return (
    <div>
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/username" exact component={() => <Login />} />
          <Route path="/create-profile" exact component={() => <Login />} />
          <Route path="/add-bio" exact component={() => <Login />} />
          <Route path="/NewPlaceBid" exact component={() => <NewPlaceBid />} />
          <Route path="/BuyNowNew" exact component={() => <BuyNowNew/>} />
          <Route path="/NewSongProfile" exact component={() => <NewSongProfile />} />
          <Route path="/NewSongProfile2" exact component={() => <NewSongProfile2/>} />
          <Route path="/NewSongProfile3" exact component={() => <NewSongProfile3 />} />
          <Route path="/NewSongProfile4" exact component={() => <NewSongProfile4 />} />
          <Route path="/home" exact component={() => <Main />} />
          <Route path="/search" exact component={() => <Main />} />
          <Route path="/library" exact component={() => <Main />} />
          <Route path="/library2" exact component={() => <Main />} />
          <Route path="/launch" exact component={() => <Main />} />
          <Route path="/Form" exact component={() => <Main />} />
          <Route path="/buynowMain" exact component={() => <BuyNow />} />
          <Route path="/upload1" exact component={() => <Upload />} />
          <Route path="/sale-info" exact component={() => <Upload />} />
          <Route path="/distribution-info" exact component={() => <Upload />} />
          <Route path="/confirm" exact component={() => <Upload />} />
          <Route path="/placebidMain" exact component={() => <PlaceBid />} />
          <Route path="/sellnowMain" exact component={() => <Sellnow />} />
          <Route path="/editpageMain" exact component={() => <Editpage />} />
          <Route path="/editpage2Main" exact component={() => <Editpage2 />} />
        </Switch>
    </div>
  );
}

export default App;
