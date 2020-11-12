import "./App.css";
import "./normalize.css";
import { Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  // debugger;
  // console.log('App: ', props);
  return (
    // <BrowserRouter>
    <div className="appBackground">
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default App;
