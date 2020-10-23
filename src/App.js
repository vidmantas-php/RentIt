import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
// import Menu from "./components/Menu/Menu";
// rfce
import "./App.css";
import CustomNavbar from "./components/Navbar/CustomNavbar/CustomNavbar";
import SearchBaras from "./components/Navbar/SearchBaras/SearchBaras";

const UserContext = React.createContext(null);
const AppContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState(null);

  const userContextState = {
    user,
    setUser,

    login: (user) => setUser(user),
    logout: () => setUser(null),
    loggedIn: () => !!user,
  };

  const appContextState = {
    favorites,
    setFavorites,
  };

  return (
    <AppContext.Provider value={appContextState}>
      <UserContext.Provider value={userContextState}>
        <Router>
          <CustomNavbar />
          <SearchBaras />
          {/* <Menu /> */}
          <div className="page-container">
            <div className="content-wrap">          
              <Content />
            </div>
            <Footer />
          </div>
        </Router>
      </UserContext.Provider>
    </AppContext.Provider>
  );
}
export default App;
export { UserContext };
export { AppContext };
