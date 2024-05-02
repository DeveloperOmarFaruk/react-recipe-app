import React, { useEffect, useState } from "react";
import "./Home.css";
import Items from "../Items/Items";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useState([]);

  const handelSearchText = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setSearchValue(data.meals));
  }, [searchText]);

  return (
    <>
      <div className="header-container">
        <h1>Search your favourite recipe</h1>
      </div>

      <div className="search-container">
        <div className="mb-3 bt-4 row">
          <div className="">
            <input
              type="text"
              className="form-control"
              placeholder="Please input your recipe name"
              onChange={handelSearchText}
            />
          </div>
        </div>
      </div>

      <div className="recipe-items-container">
        {searchValue.length == 0 ? (
          <div className="loder">
            <div class="spinner-border text-primary " role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {searchValue.map((items) => (
              <Items key={items.idMeal} items={items} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
