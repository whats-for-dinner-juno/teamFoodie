import React, { Component } from "react";
import axios from "axios";
import firebase from "./../firebase";
import RecipeHeader from "./RecipeHeader";
import LogOut from "./LogOut";
import { BrowserRouter as Router, Link } from "react-router-dom";


class RecipeDetails extends Component {
  // make constructor
  constructor(props) {
    super(props);
    this.state = {
      meal: [],
      ingredients: [],
      measurements: [],
      combined: [],
      link: [],
      dbRef: firebase.database(),
    };
  }

  componentDidMount() {
    // make axios call according to idMeal props passed down from Search
    axios({
      url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idMeal}`,
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
      // set state to the deepest level of particular recipe object
      this.setState({
        meal: response.data.meals[0],
      });

      // call function to organize relevant object information
      this.makeIngredientsArray();
    });
  }

  makeIngredientsArray() {
    // create array with all keys from meal object
    const keysArray = Object.keys(this.state.meal);

    // create clone arrays for setting state later
    let ingredientsClone = [];
    let measurementsClone = [];

    // filter array with all keys to a new array with all ingredient keys
    const ingredientsArray = keysArray.filter((key) => {
      return key.match(/Ingredient/);
    });

    // filter array with all keys to create new array with all measurement keys
    const measureArray = keysArray.filter((key) => {
      return key.match(/Measure/);
    });

    // for-in loop of large meal object
    for (const property in this.state.meal) {

      // check if keys in object are both truthy and found in measurements array
      if (measureArray.includes(property) && this.state.meal[property] && (this.state.meal[property].length > 1)) {
        measurementsClone.push(this.state.meal[property]);
        this.setState({
          measurements: measurementsClone,
        });
      }
        
      // check if keys in object are both truthy and found in ingredients array
      if (ingredientsArray.includes(property) && this.state.meal[property] && (this.state.meal[property].length > 1)) {
        ingredientsClone.push(this.state.meal[property]);
        this.setState({
          ingredients: ingredientsClone,
        });
      }
    }

    // create array to hold measurements and ingredients side by side
    let combinedArray = this.state.measurements.map((item, index) => {
      return `${item} ${this.state.ingredients[index]}`;
    });
    console.log(combinedArray);
    this.setState({
      combined: combinedArray,
    });
  }

  addRecipe = (e) => {
<<<<<<< HEAD
    const dbRef = firebase.database().ref('parties').child();
    console.log(dbRef)
    console.log(this.props.match.params.partyName)
  //
  }
=======
    const dbRef = firebase.database().ref("parties").child();
    console.log(dbRef);
    console.log(this.props.match.params.partyName);
  };
  npm;
>>>>>>> 9961c8d32dc48c8d14686cadbb81503f85610f0e
  addRecipesToParty = (e) => {
    e.preventDefault();
    console.log("Add me to recipes");
    this.state.dbRef
      .ref("parties/" + this.props.partyName + "/ingredients")
      .set({
        combined: this.state.combined,
      });
  };

  render() {
    // destructure this.state.meal
    const { strMeal, strInstructions, strYoutube } = this.state.meal;

    return (
      <div className="recipes">
        <LogOut />
        <RecipeHeader />
<<<<<<< HEAD
        <h2 className="recipeName">{strMeal}</h2>
        <ul className="ingredientList">
          {/* render list of ingredients */}
          <form>
            {this.state.combined.map((item, index) => {
              return (
                <div>
                  <div>
                    <li className="ingredientItem">{item}</li>
                    {/* <BringButton
                      disabled={this.state.disabled}
                      name={index}
                      value={item}
                    /> */}
                  </div>
                </div>
              );
            })}
          </form>
        </ul>
        <p className="recipeText">{strInstructions}</p>
        <button className="recipeBtn">Back to search</button>

        {/* may take this button out and remove the function */}
        <button className="btn" onClick={this.addRecipesToParty}>
          Add this recipe to party
        </button>
      </div>
=======
        <div className="wrapper">
            <h2 className="recipeName">{strMeal}</h2>
            <ul className="ingredientList">
            {/* render list of ingredients */}
            <form>
                {this.state.combined.map((item, index) => {
                return (
                    <div>
                    <div>
                        <li className="ingredientItem">{item}</li>
                    </div>
                    </div>
                );
                })}
            </form>
            </ul>
            <p className="recipeText">{strInstructions}</p>
            <Link to="/search">
            <button className="btn"> Back to search</button>
            </Link>
            <button className="btn" onClick={this.addRecipesToParty}>
            Add this recipe to party
            </button>
            <button className="btn">
            <a href={strYoutube}>LINK</a>
            </button>
        </div>

    </div>
>>>>>>> 9961c8d32dc48c8d14686cadbb81503f85610f0e
    );
  }

}

export default RecipeDetails;
