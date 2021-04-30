/** @format */
import React, { useState, useEffect } from "react";
import "./mars.css";
const Mars = () => {
  const [dataob, setdataob] = useState();
  const api_key = "QV9c1qc2CUHx1J90kfrO2mbqQpgp9C7TKmTCr36A";
  const url = "";

  useEffect(() => {
    const fetchurl = async () => {
      const fetchitem = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
      );
      const dataObtained = await fetchitem.json();
      setdataob(dataObtained);
    };
    fetchurl();
  }, []);
  if (!dataob) return "NASA Server is slow Sorry";

  return (
    <div className="media">
      <div className="media-contents">
        <div className="date-box animate__animated animate__fadeIn">
          <p className="date">Date : {dataob.date} </p>
          <div className="rect">
            <h4>{dataob.explanation}</h4>
          </div>
        </div>
        <div className="mars-img animate__animated animate__fadeIn">
          <img className="mars" src={dataob.hdurl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mars;
