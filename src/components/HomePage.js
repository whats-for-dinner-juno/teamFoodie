import React, { Component } from 'react';
import Account from './authenication/Account';
import Referral from './Referral';

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
                    <Referral />
            </div>
        </div>   
        </div>
        )
    }
}

export default HomePage;