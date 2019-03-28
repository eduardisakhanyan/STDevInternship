import React, { Component } from 'react'
import Form from './Form.js'

class EditRowForm extends React.Component {
    constructor(pros) {
        super(pros);
    }
    editUser = (state, event) => {
        fetch('http://localhost:3004/users/' + state.id, {
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(state)
        })
            .then(response => response.text())
            .then(text => console.log(text))
    }
    render() {
        return (
            <div>
                <Form submit={this.editUser} info={this.props.info}
                buttonName="Edit"/>
            </div>
        )
    }
}

export default EditRowForm;