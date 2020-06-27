import React, { Component } from 'react';
import firebase from './../../firebase';
import Swal from 'sweetalert2';
import StyleFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import HamIcon from './../../assets/hamburgericon.png'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandle = (event) => {
        event.preventDefault();
    }
    signUp = () => {
        const email = document.querySelector('#emailRegister').value;
        const password = document.querySelector('#passwordRegister').value;
        const firstName = document.querySelector('#name').value;
        const lastName = document.querySelector('#lastName').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            Swal.fire({
                title: 'You are Register',
                type: 'success',
                confirmButtonColor: '#00F6FF',
            })

          }).catch((error) => {
            Swal.fire({
                title: 'Please Register Again!',
                type: 'error',
                text: error.message,
                confirmButtonColor: '#00F6FF'
            })
        })
    }
    render() {
        return(
            <div className="formContainer" onSubmit={this.submitHandle}>
                <form className="signUp">
                    <h4>Create an Account</h4>
                    <img className="icon" src={HamIcon} alt="register icon" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="emailRegister" onChange={this.handleChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="passwordRegister" onChange={this.handleChange}/>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleChange}/>

                    <button className="signUnBtn" onClick={this.signUp}>Register</button>
                </form>
            </div>
        )
    }
}

export default SignUp;