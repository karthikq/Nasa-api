/** @format */

import React, { useState } from "react";
import Searchitems from "./Searchitems";
import "./search.css";

const SearchIamges = ({ data, userData }) => {
  const [ip, setIp] = useState("");

  function handleChange(e) {
    const userip = e.target.value;
    setIp(userip);
  }

  function handleSubmit(e) {
    e.preventDefault();
    userData(ip);
    setIp("");
  }

  return (
    <div className="image-route">
      <div className="contents">
        <div className="user-ip">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              value={ip}
              placeholder="Search NASA Images"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
          <div className="images">
            {data.map((value, index) => (
              <Searchitems value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchIamges;
