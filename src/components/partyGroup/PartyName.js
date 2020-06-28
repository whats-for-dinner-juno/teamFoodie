import React, { Component } from 'react';
import firebase from './../../firebase.js';
import PartyEntry from './PartyEntry.js';
import Swal from 'sweetalert2';

class PartyName extends Component {
    constructor(props) {
		super(props);
		this.state = {
			dbRef: firebase.database(),
			partyID: [],
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
				partyID: newState
			});
		});
	}
	// update state data base on change in form 
    handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	// event - > handle click event
	handleClick = event => {
		event.preventDefault();
		const isValid = this.inputCheck();
		if (isValid) {
			this.setState({

				}
			);

	// push to firebase
		this.state.dbRef.ref('users/' + this.props.user).push({

		});
		}
	};

	deleteParty = party => {
		Swal.fire({
			title: 'Are you sure you want to delete this Memory?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#846075',
			cancelButtonColor: '#1A1423',
			confirmButtonText: 'Yes, delete it!'
		}).then(result => {
			if (result.value) {
				this.state.dbRef.ref('users/' + this.props.user).child(party).remove();
			}
		});
	};
    render() {
      return (
        <main className="wrapper">
            <div className="travelEntry">
                {/* travel entry form to submit a new memory */}
                <PartyEntry
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
            </div>
			<div>
				<ul className="personalDiary">
					{/* display memory base on user logged in */}
					{this.state.partyID.map(entry => {
						return (
							<createParty
								key={entry.id.user}
								deleteEntry={() => this.deleteMemory(entry.id)}
							/>
						);
					})}
				</ul>
			</div>
        </main>
      )
    }
  }
  
  export default PartyName;