import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class RecipeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // recipes: [],
            meal: [],
            ingredients: [],
            measurements: []
        };
    }

    componentDidMount() {
        axios({
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idMeal}`,
            method: "GET",
            dataResponse: "json",
        }).then((response) => {
            this.setState({
                meal: response.data.meals[0]
            });
            this.makeIngredientsArray();
        });
    }

    makeIngredientsArray() {

        let ingredientsClone = [];
        let measurementsClone = [];
        
        console.log(this.state.meal);
        
        const keysArray = Object.keys(this.state.meal);
        console.log(keysArray)

        const ingredientsArray = keysArray.filter((key) => {
            return key.match(/Ingredient/)
        })

        const measureArray = keysArray.filter((key) => {
            return key.match(/Measure/)
        })

        for (const property in this.state.meal) {

            if (ingredientsArray.includes(property) && this.state.meal[property]) {
                ingredientsClone.push(this.state.meal[property])
                this.setState({
                    ingredients: ingredientsClone
                })
            }
            
            if (measureArray.includes(property) && this.state.meal[property]) {
                measurementsClone.push(this.state.meal[property])                
                this.setState({
                    measurements: measurementsClone
                })
            }
        }
        
        console.log(this.state.ingredients)
        console.log(this.state.measurements)
        console.log(ingredientsArray, measureArray)
    }

    // extractEntries(category) {
    // }

    render() {
        console.log(this.state.meal)
        const { strMeal, strInstructions } = this.state.meal;
        return (
            <div className="recipes">
                <h2>{strMeal}</h2>
                <p>{strInstructions}</p>
                <button>Go Back</button>
                <button>Add this recipe to party</button>
            </div>
        );
    }

}
export default RecipeDetails;