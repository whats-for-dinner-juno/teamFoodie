// Login.js

import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component{

    constructor(){
        super();
        this.state = {

            username: '',
            password: '',
 
            loggedIn: false
        }
    }

    // build out the inputs
    // make an onchange function
    // store the value of the onChange functions and compare them to the login names and passwords in the firebase database.
    // if the login matches that, set the user to the specified firebase parent node.
    // display the user name in the corner and display their database information

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <form>
                <div className="username">
                    <label htmlFor="username">username</label>
                    <input 
                        type="text" 
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="password">
                    <label htmlFor="password">password</label>
                    <input type="text" 
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={this.handleClick}>Login</button>
            </form>
        )
    }

}

export default Login;