import React, { Component } from 'react';

class PartyEntry extends Component {
    
    render() {
        const {
            inputError
        } = this.props
        return(
            <div>
                <form className="partyForm">
                <label htmlFor="email">Create Your PARTY!</label>
                    <input 
                        type="text" 
                        onChange={this.props.handleChange}
                        value={this.props.partyName}
                        name="partyName"
                    />
                    <label htmlFor="passcode">Make a passcode for your friends to use to access your party!</label>
                    <input 
                        type="text"
                        onChange={this.props.handleChange}
                        name="passcode"
                        />
                    <button className="btn btnSubmit" onClick={this.props.handleClick}>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default PartyEntry;