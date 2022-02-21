import React from "react";
import {Route, Switch } from "react-router-dom";
import "./Upload-Components/Upload.css";
import Page1 from './Upload-Components/Page1.jsx';
import Page2 from './Upload-Components/Page2.jsx';
import Page3 from './Upload-Components/Page3.jsx';
import Page4 from './Upload-Components/Page4.jsx';
import Page5 from './Upload-Components/Page5.jsx';

function Upload() {
  return (
    <div className="upload-div">
        <div className="upload-body"></div>
        <Switch>
          <Route path="/upload1" exact component={() => <Page1 />} />
          <Route path="/song-info" exact component={() => <Page2 />} />
          <Route path="/sale-info" exact component={() => <Page3 />} />
          <Route path="/distribution-info" exact component={() => <Page4 />} />
          <Route path="/confirm" exact component={() => <Page5 />} />
        </Switch>
    </div>
  );
}

export default Upload;
