import React, { Component } from 'react';
import Search from './../Search';
import firebase from './../../firebase';
import { Redirect } from 'react-router';
import LogOut from '../LogOut'

class PartyEntry extends Component {  
    
    render() {
        return(
            <div className="wrapper">
                <div>
                    <LogOut />
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


export default PartyEntry;