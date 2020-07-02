import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import Swal from 'sweetalert2';


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
  handleSearch = (query) => {
    this.fetchSearchResults(this.state.query);
  };

  fetchSearchResults = (query) => {
    axios({
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      method: "GET",
      dataResponse: "json",
    })
      .then((response) => {
        // console.log(response);
        // save the part of the object we need (from response) in the state
        const meals = response.data.meals;
        this.setState({
          recipes: meals,
        });
        // console.log(this.state.recipes)
        this.renderSearchResults();
      })
      .catch((error) => console.log(error));
  };

  

  renderSearchResults = () => {
    const { recipes } = this.state;

    // if this.state.recipes is truthy, render the search results
    if (recipes) {
      return (
        <div className="mealContent">
          {/* {console.log(recipes[0])} */}
          {recipes.map((recipe) => {
            //console.log(recipe);
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

                    <button 
                      onClick={(e) => {
                        this.props.updateRecipesData(
                        e, 
                          recipe.strMeal, 
                          recipe.idMeal, 
                          recipe.strMealThumb, 
                          recipe.strTags
                        )
                        Swal.fire({
                          title: `You've added ${recipe.strMeal} to your party!`,
                          type: 'success',
                          confirmButtonColor: '#00F6FF'
                        })
                      }} 
                      className="btn recipeBtn">
                          Add to Party
                      </button>
                    
                  <Link to={`/meal/${recipe.idMeal}`} className="btn recipeBtn">View Recipe
                      {/* <button className="btn recipeBtn">View Recipe</button> */}
                    {/* <button className="btn recipeBtn">View Recipe</button> */}
                    </Link>

                </li>
              </ul>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <p>No recipes found. Please try a different search term.</p>
        </div>
      );
    }
  };

  render() {
    const { query } = this.state;
    // console.log(query)
    return (
      <div className="containerRecipes">
        <h2 className="heading">Recipe Search</h2>
        <p>Type an ingredient below and hit the search button to see all matching recipes in our database.</p>
        {/* search input */}
        <label htmlFor="searchInput" className="searchLabel">
          <input
            type="text"
            name="query"
            value={query}
            id="searchInput"
            placeholder="Search meals by ingredient"
            onChange={this.handleChange}
            onKeyPress={event => {
              if (event.key === "Enter") {
                console.log("enter key pressed")
                this.handleSearch();
              }
            }}
          />
          {/* font-awesome */}
          {/* <button className="searchIcon"
            > */}
          <i href="" className="fas fa-search searchIcon" onClick={this.handleSearch}></i>
          {/* </button> */}
        </label>

        {/* call render result function  */}
        {this.renderSearchResults()}
      </div>
    );
  }
}
export default Search;
