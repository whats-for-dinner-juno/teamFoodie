import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from './../../firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import HamIcon from './../../assets/hamburgericon.png';
import Swal from 'sweetalert2';
import PartyName from './../partyGroup/PartyName';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            email: '',
            password: '',
            usernameShowing: false
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
        const dbRef = firebase.database().ref(firebase.auth().currentUser.uid);

        this.setState({ loggedIn: !!user})
        //   console.log("user: ", user)

        })
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (e) => {
        console.log('event; ', e.user);
        const { password, email } = this.state;
        
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
           this.props.updateState(u.user.uid);
    })
    .catch(error => {
        console.log(error);
        Swal.fire({
            title: 'Login Invalid! Please login again!',
            type: 'error',
            text: error.message,
            confirmButtonColor: '#00F6FF'
        })
    });
    firebase.auth().onAuthStateChanged(() => {
        const dbRef = firebase.database().ref(firebase.auth().currentUser.uid);
        const username = dbRef.path.pieces_[0];
        // sets user as the firebase authorization userID 
        this.setState({
            user: username
        })
    })

}

    handleClickAnonymously = (e) => {
        e.preventDefault();
        firebase.auth().signInAnonymously()
        .then(user => {
            console.log(user)
        })
        .catch(error => {
            console.log(error);
        });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              let isAnonymous = user.isAnonymous;
              let uid = user.uid;
              // ...
            } else {
              // User is signed out.
              // ...
            }
            // ...
          });
    }

    signOut = () => firebase.auth().signOut();

    render(){
        let loginpage =   
        <div>
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

        <div className="wrapperBtn">
                <button onClick={this.handleClick} className="signInBtn"><span>Log Me In</span></button>
                <button onClick={this.handleClickAnonymously} className="signInBtn"><span><Link to="/createparty">Log In Anonymously</Link></span></button>
            </div>
            <p>Don't have one? Click here to <Link to="/account/signup">Register</Link></p>
            <p>--OR--</p>
        </div>
        return(
            <form className="formContainer">
                {this.state.loggedIn ? <div></div> :loginpage}
                {this.state.loggedIn ? (
                <div>
                    <button className="btn " onClick={this.signOut}>sign out</button>
                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    <PartyName />
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