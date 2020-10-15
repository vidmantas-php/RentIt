import React, { Component } from 'react';
import "./SearchBaras.css";


import { FaSearch } from 'react-icons/fa';


 
  


export default () => {

    return(
        <div className="m_containeris">
            <div className="m_searchas">
                <div className="m_searcho_laukas">
                <input type="text" className="m_input" placeholder="Search..."></input>
                </div>
                <button className="m_miesto_mygtukas">Miestas</button>
            <button className="m_searcho_mygtukas"><FaSearch /></button>
            </div>


            <div className="m_kategorijos"></div>
        </div>

    );
};