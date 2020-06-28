import React, { Component } from 'react';
import Account from './authenication/Account';

class HomePage extends Component {

    render() {
        return(
        <div>
            <div className="">
                <div class="heroContainer">
                    <div className="headerText">
                        <h1>What's for Dinner?</h1>
                        <button className="btn login">Log In</button>
                        <button className="btn create"> Create an Account</button>
                    </div>
                    <div class="inner"></div>
                </div>
                <div className="accountSection">
                    <Account />
            </div>
        </div>   
        </div>
        )
    }
}

export default HomePage;