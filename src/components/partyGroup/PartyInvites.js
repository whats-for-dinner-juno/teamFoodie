import React, { Component, Fragment } from "react";
import Referral from "../Referral";
import Search from "./../Search";
import axios from "axios";
import firebase from "./../../firebase";

class PartyInvites extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dbRef: firebase.database(),
        selectedGuest: "",
        newGuest: "",
        guestList: [],
        recipes: [],
        unassignedIngredients: [],
        meal: [],
        bigArray: [],
    };
  }
  componentWillMount() {
    this.props.updatePartyName(this.props.match.params.partyName);

    // this.state.dbRef.ref('parties/' + this.props.match.params.partyName).on('value', response => {
    //   console.log(response.val());
    // });

    
  }

  componentDidMount() {

    this.state.dbRef.ref("parties/" + this.props.match.params.partyName).on('value', response => {
      console.log(response.val());
      // console.log(this.props.user);

    // const newState = [];
    const data = response.val();

     const guestListFB = Object.values(data['members']['guest']) ;
     const  unassignedIngredientsFB = Object.values(data['ingredients']['unassignedIngredients'])
     const  bigArrayFB = Object.values(data['ingredients']['bigArray'])
   

    console.log(bigArrayFB );
    this.setState({
       guestList: guestListFB,
       unassignedIngredients: unassignedIngredientsFB,
       bigArray: bigArrayFB
    });

});


  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // handleClick event that add guest to party 
  addGuest = (e) => {
    e.preventDefault();
    let newGuestList = this.state.guestList.concat(this.state.newGuest);
    let obj = {};
    obj = {
      guest: this.state.newGuest,
      ingredients: [],
    };

    let tempArray = this.state.bigArray;
    tempArray.push(obj);
    
    this.setState({
      guestList: newGuestList,
      bigArray: tempArray,
    });
    console.log('guest list: ',this.state.guestList);

    if (this.state.selectedGuest === '') {
        this.setState({selectedGuest: this.state.newGuest})
      }

      this.state.dbRef
      .ref("parties/" + this.props.match.params.partyName + "/members")
      .update({
        guest: newGuestList,
      });
      
  };

  async fetchSearchResults(query) {
    const res = await axios({
      url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`,
      method: "GET",
      dataResponse: "json",
    })
      .then((response) => {
        // save the part of the object we need (from response) in the state
        this.setState({
          meal: response.data.meals[0],
        });

        let arrayIng = this.makeIngredientsArray(response.data.meals[0]);

        this.setState({
          unassignedIngredients: arrayIng,
        });
      })
      .catch((error) => console.log(error));
  }

  makeIngredientsArray(meal) {
    // create array with all keys from meal object
    const keysArray = Object.keys(meal);

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
    for (const property in meal) {
      // check if keys in object are both truthy and found in ingredients array
      if (ingredientsArray.includes(property) && meal[property]) {
        ingredientsClone.push(meal[property]);
      }

      // check if keys in object are both truth and found in measurements array
      if (measureArray.includes(property) && meal[property]) {
        measurementsClone.push(meal[property]);
      }
    }

    // create array to hold measurements and ingredients side by side
    let combinedArray = measurementsClone.map((item, index) => {
      return `${item} ${ingredientsClone[index]}`;
    });
    return combinedArray;
  }

  updateRecipesData = (e, mealName, mealId, mealThumbnail, mealTags) => {
    e.preventDefault();
    let recipeObj = {
      name: mealName,
      id: mealId,
      thumbnail: mealThumbnail,
      mealTags: mealTags,
    };

    let oldRecipes = this.state.recipes;
    oldRecipes.push(recipeObj);
    this.setState({
      recipes: oldRecipes,
    });
    console.log(oldRecipes);
    this.state.recipes.map((item) => {
      // console.log(item['id']);
      this.fetchSearchResults(item["id"]);
    });
  };

  assignIngredient = (e, ingredient) => {
    e.preventDefault();
    console.log(ingredient);

    let tempArray = this.state.bigArray;
    let index = tempArray.findIndex(
      (x) => x.guest === this.state.selectedGuest
    );
    tempArray[index].ingredients.push(ingredient)

    let tempUnassignedArray = this.state.unassignedIngredients;
    let toDelete = tempUnassignedArray.indexOf(ingredient);

    if (~toDelete) tempUnassignedArray.splice(toDelete, 1);

    if (this.state.guestList === 0) {
      alert('oh boy');
    }

    this.setState({
      bigArray: tempArray,
      unassignedIngredients: tempUnassignedArray,
    });
  
    
    this.state.dbRef
    .ref("parties/" + this.props.match.params.partyName + "/ingredients")
    .update({
      unassignedIngredients: tempUnassignedArray,
      bigArray: tempArray
    });
  };

  selectGuest = (e) => {
    e.preventDefault();
    let string = e.target.value;
    console.log("Guest:", string);

    this.setState({
      selectedGuest: string,
    });
  };

  returnIngredient = (e, ingredient, guest) => {
    e.preventDefault();
    console.log(ingredient);
    console.log("guest", guest);

    let tempBigArray = this.state.bigArray;
    let index = tempBigArray.findIndex((x) => x.guest === guest);

    let ingToDelete = tempBigArray[index].ingredients.findIndex(
      (x) => x.guest === guest
    );

    tempBigArray[index].ingredients.splice(ingToDelete, 1);

    let tempUnassignedArray = this.state.unassignedIngredients;
    tempUnassignedArray.push(ingredient);

    this.setState({
      bigArray: tempBigArray,
      unassignedIngredients: tempUnassignedArray,
    });

    this.state.dbRef
    .ref("parties/" + this.props.match.params.partyName + "/ingredients")
    .update({
      unassignedIngredients: tempUnassignedArray,
      bigArray: tempBigArray
    });



  };

  render() {
    return (
      <Fragment>
        <h1 className="partyName">{this.props.match.params.partyName}</h1>
        <div className="flexGrid">
          <div className="dashboardInfo">
            <h2>Refer a Friend to Join</h2>
            <Referral partyName={this.props.match.params.partyName} />
          </div>
          <div className="listOfGuests dashboardInfo">
            <h2><span className="highlight-container"> <span className="highlight">Add Guests</span></span></h2>
            <form action="">
              <label htmlFor="addGuest" className="labelBorder"></label>
              <input
                onChange={this.handleChange}
                name="newGuest"
                placeholder="Enter guest name"
                type="text"
                id="addGuest"
              />
              <label
                className="visuallyHidden"
                htmlFor="clickToSubmitGuest"
              ></label>
              <button className="btn addGuest" onClick={this.addGuest} id="clickToSubmitGuest">
                Add guest
              </button>
            </form>
            <form>
              <label className="visuallyHidden">
                Please Select a Guest To Add Ingredients To Their Cart
              </label>
              <select onChange={this.selectGuest} name="" id="">
                {/* map users and save the value of the index number */}
                <option value="Guest Name" disabled="true">Guest Name</option>
                {this.state.guestList.map((guest) => {
                  console.log(guest);
                  return (
                    <option name="selectedGuest" value={guest} key={guest}>
                      {" "}
                      {guest}{" "}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
          <div className="listOfIngredients dashboardInfo">
              <h2>List of Ingredients</h2>
            {this.state.unassignedIngredients.map((ingredient) => {
              return (
                <button
                  className="ingredientBtn"
                  onClick={(e) => {
                    this.assignIngredient(e, ingredient);
                  }}
                >
                  {ingredient}
                </button>
              );
            })}
          </div>
        </div>
        <div className="listOfIngredientsAndGuest">
          {this.state.bigArray.map((guest) => {
            console.log(guest);
            return (
              <div className="guestAttending">
                <p className="guestName">{guest.guest}: </p>
                <ul className="ingredientBtnList">
                  {guest.ingredients.map((ing) => {
                    return (
                      <li className="ingredientBtnItem">
                        <button
                          className="ingredientBtn"
                          onClick={(e) => {
                            this.returnIngredient(e, ing, guest.guest);
                          }}
                        >
                          {ing}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="searchRecipes">
          <Search updateRecipesData={this.updateRecipesData} />
        </div>
      </Fragment>
    );
  }
}
export default PartyInvites;