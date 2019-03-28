import React, { Component } from 'react'
import Form from './Form.js'

class AddNewForm extends React.Component {

    addNewUser = (state, event) => {
        fetch('http://localhost:3004/users', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(state)
        })
            .then(response => response.text())
            .then(text => console.log(text))
    }

    render() {
        return (
            <div>
                <Form submit={this.addNewUser} buttonName="Add" />
            </div>
        )
    }
}

export default AddNewForm;