import React, { Component } from 'react';
import firebase from './../../firebase.js';
import PartyEntry from './PartyEntry.js';
import PartyPost from './PartyPost.js';

class PartyName extends Component {
    constructor(props) {
		super(props);
		this.state = {
			dbRef: firebase.database(),
            party: '',
            partyList: [],
            passcode: ''
			}
		};
	
	// fetch latest memory from firebase and update state
    componentDidMount() {
		this.state.dbRef.ref().on('value', response => {
			const newState = [];
			const data = response.val();
			for (let key in data) {
				newState.push({
					log: data[key],
					id: key
				});
			}
			this.setState({
				partyList: newState
			});
		});
	}
	// update state data base on change in form 
    handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
    };
    	// VALIDATION CHECK: make sure user fill out all required field
	inputCheck = () => {
        let inputError = '';
        console.log(inputError);
		if (this.state.partyName.length === 0 ) {
			inputError = 'You forgot to Create a Name for your Party';
		}
	
		if (inputError) {
			this.setState({ inputError });
			return false;
		}
		
		return true;
	};

	// event - > handle click event
	handleClick = event => {
        console.log('working: ', event);
		event.preventDefault();
        const isValid = this.inputCheck();

        
		if (isValid) {

            console.log(isValid);
			this.setState({
                party: '',
                passcode: ''
                });
                
                console.log(this.state.partyName)
                // push to firebase
                    this.state.dbRef.ref('Users/' + firebase.auth().currentUser.uid).update({
                        party: this.state.partyName,
                        passcode: this.state.passcode
                    });
		}
	};


    render() {
      return (
        <div className="partyEntry">
            <div>
                <PartyEntry
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    partyID={this.state.partyName}
                />
            </div>
            <div>
                <div className="createParty">
                    {this.state.partyList.map(entry => {
                        console.log(entry);
                        return (
                            <PartyPost
                                key={entry.id}
                                id={entry.id}
                                partyName={entry.log.partyName}
                                partyPasscode={entry.log.partyPasscode}
                                deleteParty={this.deleteParty}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
      )
    }
  }
  
  export default PartyName;