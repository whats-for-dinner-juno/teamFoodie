import React, { Component } from 'react';
import Search from './../Search';
import firebase from './../../firebase';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';


class PartyEntry extends Component {  
    constructor() {
        super();
        this.state = {
            signout: null
        }
    }
    signOut = (e) => {
    firebase.auth().signOut();
    this.setState({
        signout: true
    }) 
    }
    // partySuccess = () => {
    //     Swal.fire({
    //         title: `Successfully created a party! Select your party from the list below to add recipes and guests.`,
    //         type: 'success',
    //         confirmButtonColor: '#00F6FF'
    //     })
    // }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log(user)
            } else {
              // No user is signed in.
              console.log('error')
            }
          });
    }
    
    render() {
        if(this.state.signout) {
            return <Redirect push to="/" />
        }   else {
        return(
            <div>
                <div>
                    <button className="btn signOut" onClick={this.signOut}>sign out</button>
                    <h1>Welcome to What's for Dinner</h1>
                    <p>Type in your party name and click SUBMIT to create your party!</p>
                    {/* <PartyName /> */}
                </div>
                <form className="partyForm">
                <label htmlFor="email">Create Your PARTY!</label>
                    <input 
                        type="text" 
                        onChange={this.props.handlePartyNameChange}
                        value={this.props.partyName}
                        name="partyName"
                        id="email"
                        placeholder="Name of your party"
                    />
                {/* <label htmlFor='date' className='date'>
                    When is this party??
                </label>
                <input 
                    type='date' 
                    name='date' 
                    onChange={this.props.handlePartyNameChange} 
                    value={date} 
                    /> */}
                    <button className="btn btnSubmit" onClick={this.props.handleClick}>SUBMIT</button>
                
                </form>
                {/* <Search /> */}
            </div>
        )
    }
}
}

export default PartyEntry;