import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Link, Route } from 'react-router-dom';

class HomePage extends Component {

    render() {
        return(
        <div>
            <div className="">
                <div class="heroContainer">
                    <div className="headerText">
                        <h1>What's for Dinner?</h1>
                        <Link to="/login" ><button className="btn login">Log In</button></Link>
                        <Link to="/signup"><button className="btn create"> Create an Account</button></Link>
                    </div>
                    <div class="inner"></div>
                </div>
                <div className="infoSection">
                    <div className="infoContent">
                        <h2>Step One:</h2>
                        <p>Create an Account</p>   
                    </div>
                    <div className="infoContent">
                        <h2>Step Two:</h2>   
                        <p>Make A Party Organization</p>
                    </div>
                    <div className="infoContent">
                        <h2>Step Three:</h2>  
                        <p>Invite Friends and divide Tasks!</p> 
                    </div>
                </div>
            </div>   
        </div>
        )
    }
}

export default HomePage;