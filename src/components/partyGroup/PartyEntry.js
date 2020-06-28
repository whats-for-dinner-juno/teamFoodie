import React, { Component } from 'react';

class PartyEntry extends Component {
    render() {
        const {

		} = this.props;

        return(
			
            <div>
                <form>
                <label htmlFor="email">Create Your PARTY!</label>
                    <input 
                        type="text" 
                        value={this.state.partyID}
                        name="party"
                    />
                    <button>SUMBIT</button>

                </form>
            </div>
        )
    }
}

export default PartyEntry;