import React from "react";
import { FaFilter } from "react-icons/fa";
import "./SortByButton.css";

export default () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FaFilter />
        <span className="rusiuotipagal">Rusiuoti pagal</span>
      </button>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton"
      >
        <a className="dropdown-item" href="#auksciausi">
          Auksciausi
        </a>
        <a className="dropdown-item" href="#zemiausi">
          Zemiausi
        </a>
        <a className="dropdown-item" href="#naujausi">
          Naujausi
        </a>
        <a className="dropdown-item" href="#seniausi">
          Seniausi
        </a>
      </div>
    </div>
  );
};
