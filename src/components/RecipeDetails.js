import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class RecipeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            meal: []
        };
    }

    componentDidMount() {
        axios({
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idMeal}`,
            method: "GET",
            dataResponse: "json",
        }).then((response) => {
            this.setState({
                meal: response[0],
            });
        });
    }
    render() {
        console.log(this.state.meal)
        const { strMeal, strInstructions } = this.state.meal;
        return (
            <div className="recipes">
                <h2>{strMeal}</h2>
                <p>{strInstructions}</p>
            </div>
        );
    }

}
export default RecipeDetails;