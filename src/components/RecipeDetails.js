import React, { Component } from "react";
import axios from 'axios'
import firebase from 'firebase';
import { Link } from "react-router-dom";
import BringButton from './BringButton'

class RecipeDetails extends Component {

    // make constructor
    constructor(props) {
        super(props);
        this.state = {
            meal: [],
            ingredients: [],
            measurements: [],
            combined: []
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
                meal: response.data.meals[0]
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
            return key.match(/Ingredient/)
        })

        // filter array with all keys to create new array with all measurement keys
        const measureArray = keysArray.filter((key) => {
            return key.match(/Measure/)
        })

        // for-in loop of large meal object
        for (const property in this.state.meal) {

            // check if keys in object are both truthy and found in ingredients array
            if (ingredientsArray.includes(property) && this.state.meal[property]) {
                ingredientsClone.push(this.state.meal[property])
                this.setState({
                    ingredients: ingredientsClone
                })
            }
            
            // check if keys in object are both truth and found in measurements array
            if (measureArray.includes(property) && this.state.meal[property]) {
                measurementsClone.push(this.state.meal[property])                
                this.setState({
                    measurements: measurementsClone
                })
            }
        }

        // create array to hold measurements and ingredients side by side
        let combinedArray = this.state.measurements.map((item, index) => {
            return `${item} ${this.state.ingredients[index]}`
        })
        this.setState({
            combined: combinedArray
        })
    }

    // 

    render() {
        // destructure this.state.meal
        const { strMeal, strInstructions } = this.state.meal;
        return (
            <div className="recipes">
                <h2>{strMeal}</h2>
                <ul>
                    {/* render list of ingredients */}
                    <form>
                        {this.state.combined.map((item, index) => {
                            return (
                                <div>
                                    <div>
                                        <li>{item}</li>
                                        <BringButton 
                                            disabled={this.state.disabled}
                                            name={index} 
                                            value={item}/>                    
                                    </div>
                                </div>
                                )
                            }
                        )}
                    </form>
                </ul>
                <p>{strInstructions}</p>
                <button>Back to search</button>
                <button>Add this recipe to party</button>
            </div>
        );
    }

}
export default RecipeDetails;