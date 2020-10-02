import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import Navbar from "./components/Navbar/Navbar";
// import { Cards } from "./components/Card/Cards";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import "./App.css";

const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  const userContextState = {
    user,
    setUser,

    login: (user) => setUser(user),
    logout: () => setUser(null),
    loggedIn: () => !!user,
  };

  return (
    <UserContext.Provider value={userContextState}>
      <Router>
        <Navbar />
        <Menu />
        <div className="input-group mb-3 searchas-pagr">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
        <div className="page-container">
          <div className="content-wrap">
            <Content />
          </div>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
export { UserContext };
