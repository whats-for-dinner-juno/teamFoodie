import React, { Component } from 'react';
import Referral from '../Referral';
import Search from './../Search';

class PartyInvites extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <div>
                <h1>{this.props.match.params.partyName}</h1>
                <Referral partyName={this.props.match.params.partyName} />
                <Search />
            </div>
        ) 
    }
}
export default PartyInvites;