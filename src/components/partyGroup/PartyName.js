import React, { Component } from 'react';
import firebase from './../../firebase.js';
import PartyEntry from './PartyEntry.js';
import PartyPost from './PartyPost.js';
import { NavLink } from 'react-router-dom';

class PartyName extends Component {
    constructor(props) {
		super(props);
		this.state = {
            dbRef: firebase.database(),
            partyList: [],
            // partyName: '',
            members: '',
            // passcode: ''
			}
		};
	
	// fetch latest memory from firebase and update state
    componentDidMount() {
		this.state.dbRef.ref('parties/').on('value', response => {
            console.log(response.val());
            // console.log(this.props.user);
			const newState = [];
			const data = response.val();
			for (let key in data) {
				newState.push({
					dataset: data[key],
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

    handlePartyNameChange = event => {
        this.props.updatePartyName(event.target.value);
    };
    	// VALIDATION CHECK: make sure user fill out all required field
	inputCheck = () => {
        let inputError = '';

		if (this.props.partyName.length === 0 ) {
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

			// this.setState({
            //     partyName: '',
            //     });
            this.props.updatePartyName('');

                if(this.props.user === null){
                    this.state.dbRef.ref('parties/' + this.props.partyName + '/members').set({
                        
                        owner: 'Anonymous',
                        guest: ''

                    });

                    this.state.dbRef.ref('parties/' + this.props.partyName + '/ingredients').set({
                        unassignedIngredients: '',
                        bigArray: ''


                    });
                    console.log('set user to anon')
                }else{
                    console.log(this.props.partyName)
                    console.log(this.props.user.email)
    
                    // push to firebase
                        let emailaddress= this.props.user.email;
                        this.state.dbRef.ref('parties/' + this.props.partyName + '/members').set({
                            owner: emailaddress
                        });
                }
                    
                
                
		}
    };
    
    render() {
      return (
        <div className="partyEntry">
            <div>
                <PartyEntry
                    handlePartyNameChange={this.handlePartyNameChange}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    partyName={this.props.partyName}
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
                                partyName={entry.id}
                                // deleteParty={this.deleteParty}
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