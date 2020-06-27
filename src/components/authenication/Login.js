// Login.js

import React, { Component } from 'react';
// import { withFirebase } from '../Firebase';
import firebase from './../../firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import HamIcon from './../../assets/hamburgericon.png';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedIn: false
        }
    }
    //configuration for google authenication
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }
      componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ loggedIn: !!user})
          console.log("user: ", user)
        })
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
        const { password, email } = this.state;
        
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user)
        })
        .catch(error => {
            console.log(error);
        });
    }

    signOut = () => firebase.auth().signOut();

    render(){
        {console.log(this.state.loggedIn)}
        return(
            <form className="formContainer">
                <h4>Login to your Account</h4>
                <img className="icon" src={HamIcon} alt="login icon" />
                <div className="email">
                    <label htmlFor="email">username</label>
                    <input 
                        type="email" 
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="password">
                    <label htmlFor="password">password</label>
                    <input type="password" 
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={this.handleClick}>submit</button>
            
                {this.state.loggedIn ? (
                <div>
                    <button onClick={this.signOut}>sign out</button>
                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                </div>
                ) : (
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                )}
            </form>
        )
    }

}

export default Login;