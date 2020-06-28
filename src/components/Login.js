// // Login.js

// import React, { Component } from 'react';
// import firebase from './../firebase';
// import Swal from 'sweetalert2';
// import { Router, Route, Link } from 'react-router-dom';

// class Login extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             displayName: '',
//             usernameShowing: false
//         }
//     }

//     // build out the inputs
//     // make an onchange function
//     // store the value of the onChange functions and compare them to the login names and passwords in the firebase database.
//     // if the login matches that, set the user to the specified firebase parent node.
//     // display the user name in the corner and display their database information


//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleClick = (e) => {
//         const { password, email } = this.state;
        
//         e.preventDefault();
//         firebase.auth().signInWithEmailAndPassword(email, password)
//         .then(user => {
//             console.log(user);
//             this.setState({
//                 displayName: {email},
//                 usernameShowing: true
//             })
//             Swal.fire({
//                 title: 'You are Logged in',
//                 type: 'success',
//                 confirmButtonColor: '#00F6FF',
//             })
//         })
//         .catch(error => {
//             console.log(error);
//             Swal.fire({
//                 title: 'Login Invalid! Please login again!',
//                 type: 'error',
//                 text: error.message,
//                 confirmButtonColor: '#00F6FF'
//             })
//         });
//     }

//     signOut = () => this.auth.signOut();

//     render(){
//         return(
//             <div>
//                 { this.state.usernameShowing ?
//                     <h2>{this.state.email} is logged in.</h2>:null
//                 }
//                 <form>
//                     <div className="email">
//                         <label htmlFor="email">username</label>
//                         <input 
//                             type="email" 
//                             value={this.state.email}
//                             name="email"
//                             onChange={this.handleChange}
//                         />
//                     </div>

//                     <div className="password">
//                         <label htmlFor="password">password</label>
//                         <input type="password" 
//                             value={this.state.password}
//                             name="password"
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <button onClick={this.handleClick}>submit</button>
//                     <button onClick={this.signOut}>sign out</button>
//                 </form>
//             </div>
//         )
//     }

// }

// export default Login;