import React, { Component } from "react";
import axios from "axios";

class RecipeHeader extends Component {
  constructor() {
    super();
    this.state = {
      img: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      responseType: "JSON",
      params: {
        client_id: "olpn5GB4hLxl7ThlorrtrzvtGptCGNy85NlyE9k_mW4",
        count: "1",
        query: "restaurant",
      },
    }).then((response) => {
      let img = response.data[0].urls.regular;
      this.setState({
        img,
      });
      console.log(response);
    });
  }

  render() {
    return (
      <div className="recipeBackground">
        <img className="recipeImg" src={this.state.img} />
        <h1 className="recipeTitle">Recipe & Ingredients</h1>
      </div>
    );
  }
}

export default RecipeHeader;
