import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import { Routes } from "./constants/Routes";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import TrainMemory from "./components/TrainMemory";
import TrainWords from "./components/TrainWords";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
        <Route path={"/" + Routes.Login} component={Login} exact/>
        <Route path={"/" + Routes.Menu} component={Menu} />
        <Route path={"/" + Routes.Profile} component={Profile} />
        <Route path={"/" + Routes.TrainMemory} component={TrainMemory} />
        <Route path={"/" + Routes.TrainWords} component={TrainWords} />
        <ToastContainer />
    </div>
  )
}

export default App;
