import React, { Component } from 'react';
import Search from './../Search';
import firebase from './../../firebase';
import { Redirect } from 'react-router';

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

    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //           // User is signed in.
    //           console.log(user)
    //         } else {
    //           // No user is signed in.
    //           console.log('error')
    //         }
    //       });
    // }
    
    render() {
        if(this.state.signout) {
            return <Redirect push to="/" />
        }   else {
        return(
            <div>
                <div>
                    <button className="btn signOut" onClick={this.signOut}>sign out</button>
                    <h1>Welcome to Whats for Dinner</h1>
                    {/* <PartyName /> */}
                </div>
                <form className="partyForm">
                <label htmlFor="email">Create Your PARTY!</label>
                    <input 
                        type="text" 
                        onChange={this.props.handlePartyNameChange}
                        value={this.props.partyName}
                        name="partyName"
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