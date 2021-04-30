/** @format */

import React from "react";
import "./mars.css";
const Marshome = ({ contents }) => {
  console.log(contents);
  return (
    <div className="media">
      <div className="media-contents">
        <div className="date-box">
          <p className="date">Date : {contents.date} </p>
          <div className="rect">
            <h4>{contents.explanation}</h4>
          </div>
        </div>
        <div className="mars-img">
          <img className="mars" src={contents.hdurl} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Marshome;
