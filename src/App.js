import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
