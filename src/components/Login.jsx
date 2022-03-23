import React from "react";
import {Route, Switch } from "react-router-dom";
import "./Login-Components/Login.css";
import Login1 from './Login-Components/Login1.jsx';
import Login2 from './Login-Components/Login2.jsx';
import Login3 from './Login-Components/Login3.jsx';
import Login4 from './Login-Components/Login4.jsx';

function Login() {
  return (
    <div className="login-div">
        <div className="login-body"></div>
        <Switch>
          <Route path="/" exact component={() => <Login4 />} />
          <Route path="/username" exact component={() => <Login1 />} />
          <Route path="/create-profile" exact component={() => <Login2 />} />
          <Route path="/add-bio" exact component={() => <Login3 />} />
        </Switch>
    </div>
  );
}

export default Login;
