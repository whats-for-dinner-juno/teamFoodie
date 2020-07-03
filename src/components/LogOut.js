import React, { Component, Fragment } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router';

class LogOut extends Component {
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
    
    render(){
        if(this.state.signout) {
            return <Redirect push to="/" />
        }   else {
        return(
            <Fragment>
                <nav className="navWrapper">
                    <button className="btn signOut" onClick={this.signOut}>sign out</button>
                </nav>
            </Fragment>
            
            )
        }
    }
}

export default LogOut;