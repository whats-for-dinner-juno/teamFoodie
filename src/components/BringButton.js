import React, { Component, Fragment } from 'react';
import firebase from 'firebase';

class BringButton extends Component {
    
    constructor(){
        super();
        this.state = {
            displayName: '',
            disabled: false,
            checked: false,
            user: firebase.auth().currentUser.uid
        }
    }

    handleClick = (e) => {
        // update the firebase with using e.target.value to make child nodes for who's bringing it.
        // use the name stored in the ingredients firebase child node and display that next to the button
        // if a name is showing, disable the button
        // if your name is showing, leave the button enabled to toggle
        e.preventDefault();
        this.setState({
            checked: this.state.checked ? false : true,
            disabled: this.state.disabled ? false : true,
        })
    }
    
    render(){
        return(
            <Fragment>
                <button 
                    name={this.props.name} 
                    onClick={this.handleClick} 
                    value={this.props.value}
                    disabled={this.state.disabled}
                    >Bring This!</button>
                
                { this.state.checked ?
                (<div>
                    <p>{firebase.auth().currentUser.uid} is Bringing {this.props.value}</p>
                    <button onClick={this.handleClick}>Remove Item</button>
                </div>):null}

            </Fragment>
        )
    }
}

export default BringButton;