import React, { Component } from 'react';
import Search from './../Search';
import firebase from './../../firebase';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import LogOut from '../LogOut'

class PartyEntry extends Component {  
    
    render() {
        return(
            <div>
                <LogOut />
                <div className="wrapper">
                    <div>
                        <h1>Welcome to What's for Dinner</h1>
                        <p>Type in your party name and click SUBMIT to create your party!</p>
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
                    <label htmlFor='date' className='date'>When is this Party?</label>
                        <input 
                            type='date' 
                            name='date' 
                            onChange={this.props.handleChange} 
                            value={this.props.date} 
                        />
                        <button className="btn btnSubmit" onClick={this.props.handleClick}>SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default PartyEntry;