// Referral.js

import React, { Component } from 'react';
import firebase from 'firebase';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

class Referral extends Component{
    
    constructor(){
        super();
        this.state = {
            email: '',
            partyName: '',
            inviteeName: '',
            dbRef: firebase.database()
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('clicked')

        let serviceId = 'gmail';
        let templateId = 'what_s_for_dinner';
        let userId = 'user_jxOHmKi4dp7HO6sDxJ6Fb';
        let templateParams = {
            "email": this.state.email,
            "party": this.props.partyName,
         }
        
        // email is sent to the inputted email address, it sends the party name to the recipient
        emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
        Swal.fire({
            title: 'Thanks for referring a friend!!!',
            type: 'success',
            confirmButtonColor: '#00F6FF',
        })
        }, (err) => {
        Swal.fire({
            title: 'You entered an invalid e-mail address, please try again!',
            type: 'error',
            text: err.message,
            confirmButtonColor: '#00F6FF'
        })
        });
    }

    render(){
        return (
            <form className="refForm">
                <label htmlFor="email">Refer a Friend to Join</label>
                <input type="email" 
                    onChange={this.handleChange} 
                    value={this.state.email}
                    name='email'
                    placeholder="email address"/>
                <button className="btn refBtn" onClick={this.handleClick}>send email</button>
            </form>
        )
    }
}

export default Referral;

