import React, { Component } from 'react'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            users: null,
            isFetching: true,
            trigger: false,
        };
    }

    componentDidMount() {
        fetch('http://localhost:3004/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data, isFetching: false }))
            .catch(error => {
                console.log(error);
                this.setState({ users: null, isFetching: false });
            });
    }

    deleteClick = (event) => {
        fetch('http://localhost:3004/users/' + event.target.name, {
            method: "DELETE"
        });
    }

    editClick = (event) => {
        fetch('http://localhost:3004/users/' + event.target.name)
            .then(response => response.json())
            .then(data => this.setState({ user: data, isFetching: false }))
            .then(() => this.props.rowInfo(this.state.user))
            .then(() => this.props.openEditWindow(true))
            .catch(error => {
                console.log(error);
                this.setState({ user: null, isFetching: false });
            });
        
    }

    render() {
        const { users, isFetching } = this.state;
        if (isFetching) {
            return <h1>Loading...</h1>;
        }
        return (
            <table className="Table">
                <thead>
                    <tr>
                        {this.props.headers.map((header,index) =>
                            <th key={index}>{header}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => 
                        <tr key = {index}>
                            {Object.keys(user).map((key,index) => {
                                if (key !== "id") {
                                   return <td key={index}>{user[key]}</td>;
                                }
                            }
                            )}
                            <td key={index + 'Edit'}><button name={user.id} onClick={this.editClick}>Edit</button></td>
                            <td key={index + 'Delete'}><button name={user.id} onClick={this.deleteClick}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

}

export default Table;