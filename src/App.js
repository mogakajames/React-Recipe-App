import React, { useEffect, useState } from "react";

import Recipe from "./recipe";

import "./App.css";

const App = () => {
  const APP_ID = "6fefd952";
  const APP_KEY = "e60a07405cd0dd3af670f23840af4fa5";

  //set state
  //Application States
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [submitQuery, setSubmitQuery] = useState("fish");

  useEffect(() => {
    foodRecipes();
    // eslint-disable-next-line
  }, [submitQuery]);


  const foodRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${submitQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const searchKey = (e) => {
    setSearch(e.target.value);
  };

  const getSearchQuery = (e) => {
    e.preventDefault();
    setSubmitQuery(search);
    
  };

  return (
    <div className="App">
      <h1>WELCOME TO MAPISHI APP</h1>
      <h3>
        <i>Recipes for your best meals</i>
      </h3>
      <form className="search-form" onSubmit={getSearchQuery}>
        <input
          type="text"
          placeholder="Search recipe..."
          className="search-bar"
          value={search}
          onChange={searchKey}
        />
        <button className="search-button" type="submit">
          Search Recipe
        </button>
      </form>
      <div>
        <h3>
          Search recipes for your favourite meals. We take you through every
          step of preparation. <br />
          Enjoy!
        </h3>
      </div>
      <div className="results">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
