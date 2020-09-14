import React from 'react';
import loading_image from '../../assets/images/loading.gif';
import "./Loading.css";

export default ({className}) => (
    <div className={className}>
        <img className="loading-image" src={loading_image} alt="loading-spinner"/>
        <h1>Loading...</h1> 
    </div>
)