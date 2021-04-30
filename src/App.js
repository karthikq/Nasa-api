/** @format */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchImages from "./components/SearchIamges";
import FirstPage from "./components/FirstPage";
import Mars from "./components/Mars";
import "../src/components/mars.css";
function App() {
  const [item, setItem] = useState([]);
  const [query, setQuery] = useState("apollo");

  function handleIp(ip) {
    setQuery(ip);
  }

  const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    let itemss = [];
    const data = await fetch(url);
    const items = await data.json();
    for (let i = 0; i < 50; i++) {
      let rows = items.collection.items[i].links[0].href;
      itemss.push(rows);
    }
    setItem((preValue) => [preValue, ...itemss]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <FirstPage />
          </div>
        </Route>
        <Route path="/images">
          <div className="images">
            <SearchImages data={item} userData={handleIp} />
          </div>
        </Route>
        <Route path="/mars">
          <div className="mars-layout">
            <Mars />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
