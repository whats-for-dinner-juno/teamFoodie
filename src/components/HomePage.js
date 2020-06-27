import React, { Component } from 'react';
import Account from './authenication/Account';
import Login from './authenication/Login';
import SignUp from './authenication/SignUp';

class HomePage extends Component {

    render() {
        return(
        <div>
            <div className="">
                <div class="heroContainer">
                    <div className="headerText">
                        <h1>What's for Dinner?</h1>
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