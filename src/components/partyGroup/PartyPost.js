import React, { Component } from 'react';
import firebase from './../../firebase.js';
import Swal from 'sweetalert2';

class PartyPost extends Component {

	deleteParty = party => {
	
		console.log(party);
		Swal.fire({
			title: 'Are you sure you want to delete this Memory?',
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
		<li className='eachEntry' key={this.props.id}>
			<button onClick={()=> this.deleteParty(this.props.id)}><i class="fa fa-trash" aria-hidden="true"></i>
			</button>
			<div className='content'>
				<div className="textEntry">{this.props.partyName}</div>
			</div>
		</li>
	);
	}
}

export default PartyPost;