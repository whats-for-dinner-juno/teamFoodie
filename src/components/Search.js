// // referenced from: https://www.youtube.com/watch?v=22SAhH5JxYk&feature=emb_logo
import React, { Component } from "react";
import axios from "axios";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      recipes: [],
    };
  }
  handleChange = (event) => {
    const query = event.target.value;
    // console.log(query)
    this.setState({
      query,
    });
  };
  handleClick = (query) => {
    this.fetchSearchResults(this.state.query);
  };
  fetchSearchResults = (query) => {
    axios({
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
      // console.log(response);
      // save the part of the object we need (from response) in the state
      const meals = response.data.meals;
      this.setState({
        recipes: meals,
      });
      // console.log(this.state.recipes)
      this.renderSearchResults();
    });
  };
  renderSearchResults = () => {
    const { recipes } = this.state;
    console.log("rendersearachresults");
    console.log(recipes);
    // recipes.map((recipe) => {
    return (
      <div className="mealContent">
        {console.log(recipes[0])}
        {recipes.map((recipe) => {
          console.log(recipe);
          return (
            <ul className="mealList">
              <li className="mealCard" key={recipe.idMeal}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strTags}
                  className="mealImg"
                />
                <h1 className="mealTitle">{recipe.strMeal}</h1>
                <p className="recipeCategory">
                  Type of Recipe: <span>{recipe.strCategory}</span>
                </p>
                <p className="recipeArea">
                  Nationality: <span> {recipe.strArea}</span>
                </p>
                <button className="recipeBtn">View Recipe</button>
              </li>
            </ul>
          );
        })}
      </div>
    );
    // })
  };
  render() {
    const { query } = this.state;
    // console.log(query)
    return (
      <div className="container">
        <h2 className="heading">Recipe Search</h2>
        {/* search input */}
        <label htmlFor="searchInput" className="searchLabel">
          <input
            type="text"
            name="query"
            value={query}
            id="searchInput"
            placeholder="TK"
            onChange={this.handleChange}
          />
          {/* font-awesome */}
          <i className="fas fa-search" onClick={this.handleClick}></i>
        </label>
        <div className="resultsContainer">
          <ul>{this.renderSearchResults()}</ul>
        </div>
      </div>
    );
  }
}
export default Search;
