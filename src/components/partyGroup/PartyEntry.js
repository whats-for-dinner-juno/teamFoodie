import React, { Component } from 'react';

class PartyEntry extends Component {
    render() {

        return(
			
            <div>
                <form>
                <label htmlFor="email">Create Your PARTY!</label>
                    <input 
                        type="text" 
                        onChange={this.props.handleChange}
                        value={this.props.partyName}
                        name="partyName"
                    />
                    <p className='errorMessage'>{this.props.inputError}</p>
                    <button onClick={this.props.handleClick}>SUMBIT</button>

                </form>
            </div>
        )
    }
}

export default PartyEntry;