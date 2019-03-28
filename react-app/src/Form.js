import React, { Component } from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                balance: '',
                age: '',
                name: '',
                gender: '',
                company: '',
                email: '',
                id: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        if(this.props.info !== undefined) {
            this.setState({
                balance: this.props.info.balance,
                age: this.props.info.age,
                name: this.props.info.name,
                gender: this.props.info.gender,
                company: this.props.info.company,
                email: this.props.info.email,
                id: this.props.info.id,
            })
        }
    }

    render() {
        return (
            <form className='Form' onSubmit={(event) => this.props.submit(this.state,event)}>
                <div>
                    <label >Balance:</label>
                    <input type="text" name="balance" value={this.state.balance} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label >Age:</label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label >Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label >Gender:</label>
                    <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label >Company:</label>
                    <input type="text" name="company" value={this.state.company} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label >E-Mail:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                </div>
                <input type="submit" value={this.props.buttonName}></input>
            </form>
        )
    }
}

export default Form;