/** @format */

import React from "react";
import Button from "./Button";

const FirstPage = () => {
  return (
    <div className="bg-img">
      <div className="header">
        <h2>NASA API</h2>
        <div className="btns">
          <Button className="img-btn b1" title="Explore Images" path="images" />
          <Button className="mars-btn b1" title="Explore Mars" path="mars" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
