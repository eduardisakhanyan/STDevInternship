import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import AddUserForm from './AddUserForm.js'
import EditUserForm from './EditUserForm.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.headers = ["Balance","Age","Name","Gender","Company","E-mail"];
    this.state = {
      info: {},
      openAddWindow: false,
      openEditWindow: false,
    }
  }

  addUser = () => {
    this.setState({openAddWindow: true});
  }

  getRowInfo = (info) => {
    this.setState({info: info});
  }

  open = (val) => {
    this.setState({openEditWindow: !val});
    this.setState({openEditWindow: val});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addUser}>AddUser</button>
        <div>
          <Table headers={this.headers} rowInfo={this.getRowInfo} openEditWindow={this.open}/>
        </div>
        <div className="Form">
          {this.state.openAddWindow?<AddUserForm />:''}
        </div>
        <div className="Form">
          {this.state.openEditWindow?<EditUserForm info={this.state.info}/>:''}
        </div>
      </div>
    );
  }
}

export default App;