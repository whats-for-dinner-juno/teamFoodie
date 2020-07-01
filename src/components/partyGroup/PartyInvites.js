import React, { Component } from 'react';
import Referral from '../Referral';
import Search from './../Search';
import {Route} from 'react-router-dom';

class PartyInvites extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount()  {
        this.props.updatePartyName(this.props.match.params.partyName);
    }
    render() {
        return(
            <div>
                <h1>{this.props.match.params.partyName}</h1>
                <Referral partyName={this.props.match.params.partyName} />
                <div className="searchRecipes">
                    <Search />
                </div>
            </div>
        ) 
    }
}
export default PartyInvites;