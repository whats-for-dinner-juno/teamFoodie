import React, { Component } from 'react';

class Party extends Component {
    constructor(){
        super();
        this.state = {
            partyID: null,
        }
    }
    render() {
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
export default Party;