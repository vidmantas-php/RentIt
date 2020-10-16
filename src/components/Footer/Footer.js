import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer bg-dark">
      <div className="container">
        <div className="eilute">
          <div className="rights footer-center">
            &copy;{new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
