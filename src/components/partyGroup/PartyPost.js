import React, { Component } from 'react';
import firebase from './../../firebase.js';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

class PartyPost extends Component {

	deleteParty = party => {
	
		console.log(party);
		Swal.fire({
			title: 'Are you sure you want to delete this Party?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#846075',
			cancelButtonColor: '#1A1423',
			confirmButtonText: 'Yes, delete it!'
		}).then(result => {
			if (result.value) {
            console.log(party);
            firebase.database().ref('parties/').child(party).remove();
			}
		});
	};
	render() {

	return (
		<div className="partyContainer">
			<Link to={`/dashboard/${this.props.partyName}`}>
					<div className="partyPost" key={this.props.id}>
						<div className="partyNameContent">
							<h4>{this.props.partyName}</h4>
							<span>{this.props.date}</span>
						</div>
					</div>
			</Link>
			<button className="removeButton" onClick={()=> this.deleteParty(this.props.partyName)}><i className="fa fa-times" aria-hidden="true"></i>
			</button>
		</div>

	);
	}
}

export default PartyPost;