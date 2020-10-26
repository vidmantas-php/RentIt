import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
// rfce
import "./App.css";
import CustomNavbar from "./components/Navbar/CustomNavbar/CustomNavbar";
import SearchBaras from "./components/Navbar/SearchBaras/SearchBaras";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <CustomNavbar />
      <SearchBaras />
      <div className="page-container">
        <div className="content-wrap">
        {user ? (
        <>
          <Menu 
          displayName={user.displayName}
          />
        </>
      ) : (
        <></>
      )}
          <Content />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
