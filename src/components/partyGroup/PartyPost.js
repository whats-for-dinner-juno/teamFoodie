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
            firebase.database().ref().child(party).remove();
			}
		});
	};
	render() {

	return (
		<div className="partyPost" key={this.props.id}>
			<button onClick={()=> this.deleteParty(this.props.id)}><i className="fa fa-times" aria-hidden="true"></i>
			</button>
			<div className="partyNameContent">{this.props.partyName}</div>
		</div>
	);
	}
}

export default PartyPost;