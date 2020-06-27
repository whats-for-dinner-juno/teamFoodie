import React, { Component } from 'react';
import Search from './Search';
import './../styles/App.scss';
import './HomePage'
import HomePage from './HomePage';
import Party from './Party';
import firebase from './../firebase';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = ({
  //       events:[],
  //       createEvent: "",
  //       errorMessage:""
  //   })

  // }
  // componentDidMount() {
  //   const dbRef = firebase.database().ref(`events`);

  //   dbRef.on('value', data => {
  //     const savedEvents = data.val();
  //     const firebaseArray = Object.values(savedEvents);

  //     this.setState({
  //       events: firebaseArray ? firebaseArray : []
  //     });
  //   });
  // }
  // getEventName = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };
  // createEvent = () => {
  //   // event.preventDefault();

  //   if(this.state.createEvent !== "") {
  //   // taking the events array in state and copying it
  //     const copyOfEvents = [...this.state.events];
  //     // this is putting the input we saved in state into an object
  //     const makeObject = { name: this.state.createEvent };
  //     // we are pushing the object to the copy of the array in state
  //     copyOfEvents.unshift(makeObject);
  //     // updating the state of events to the new version of the array
  //     this.setState(
  //       {
  //         events: copyOfEvents
  //       },
  //       () => {
  //         // sending new event object to firebase - asynchronous callback
  //         const dbRef = firebase
  //           .database()
  //           .ref(`events/${this.state.events[0].name}`);
  //         dbRef.set({
  //           eventName: this.state.events[0].name,
  //           guests: {dummy: 0},
  //           recipes: { dummy: 0 },
  //           unassignedIngredients: ["dummy"]
  //         });
  //       }
  //     );
  //   } 
  //   else 
  //   {
  //     this.setState({
  //       errorMessage: "Please enter a name for your event before clicking submit"
  //     })
  //   }
  // };
  render() {
  return (
    <div className="App">
      <HomePage />
      <Party />

      {/* importing just for test purposes */}
      <Search />
    </div>
  );
  }
}

export default App;
