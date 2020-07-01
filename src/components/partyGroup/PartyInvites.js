import React, { Component, Fragment } from 'react';
import Referral from '../Referral';
import Search from './../Search';
import {Route, Switch} from 'react-router-dom';
import RecipeDetails from '../RecipeDetails';

class PartyInvites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGuest: '',
            newGuest: '',
            guestList: [],
        }
        
    }
    componentWillMount()  {
        this.props.updatePartyName(this.props.match.params.partyName);
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    addGuest = (e) => {
        e.preventDefault();
        let newGuestList = this.state.guestList.concat(this.state.newGuest);
        console.log(newGuestList);
        this.setState({
            guestList: newGuestList
        })
    }
    render() {
        return(
            <Fragment>
                <h1>{this.props.match.params.partyName}</h1>
                <div className="flexGrid">
                    <div><Referral partyName={this.props.match.params.partyName} /></div>
                    <div className="listOfGuests">
                        <h2>Add A Guest</h2>
                        <form action="">
                        <label htmlFor="addGuest" className="labelBorder">Add A Guest:</label>
                        {/* Below input adds guest to guest array on event object in Firebase. */}
                            <input
                            onChange={this.handleChange} 
                            name="newGuest"
                            value={this.state.newGuest}
                            placeholder="Enter guest name"
                            type="text"
                            id="addGuest"
                            />
                            <label className="visuallyHidden" htmlFor="clickToSubmitGuest"></label>
                            <button onClick={this.addGuest} id="clickToSubmitGuest">Add guest</button>
                        </form>
                        <form>
                        <label class="visuallyHidden">Please Select a Guest To Add Ingredients To Their Cart</label>
                        <select name="" id="">
                            {/* map users and save the value of the index number */}
                            <option value="">Guest Name</option>
                            {this.state.guestList
                            ? this.state.guestList.map((guest) => {
                                console.log(guest);
                                return (
                                    <option value={guest} key={guest}> {guest} </option>
                                );
                                })
                            : console.log("fail")}
                        </select>
                        </form>
                    </div>

                    <div className="listOfIngredients">This is where INGREDIENTS Goes goes</div>
                    <div className="listOfIngredientsAndGuest">This is where Ingredients for Guest dibs goes</div>
                </div>

                <div className="searchRecipes">
                    <Search />
                </div>
                <Switch>
                <Route path="/meal/:idMeal" component={RecipeDetails}/>
                </Switch>
            </Fragment>
        ) 
    }
}
export default PartyInvites;