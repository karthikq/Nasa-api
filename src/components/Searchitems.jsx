/** @format */

import React, { useState } from "react";

const Searchitems = ({ index, value }) => {
  const id = Math.floor(Math.random() * 1000 + 1);

  return (
    <div className="image-div">
      <img key={id} id={index} className="nasa-images" src={value} alt="" />
    </div>
  );
};

export default Searchitems;
