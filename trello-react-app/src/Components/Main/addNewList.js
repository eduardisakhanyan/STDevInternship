import React, { Component } from 'react';
import NewItemForm from '../Forms/newItemForm';
import { connect } from 'react-redux';
import { addNewList } from '../../store/actions/lists';

class AddNewList extends Component {
  state = {
    addingList: false,
  }

  handleSubmit = (value) => {
    this.props.addNewList(value);
    this.setState({
      addingList: false,
    })
  }

  handleClick = () => {
    this.setState({
      addingList: true,
    })
  }

  render(){
    return (
      this.state.addingList
      ?(<NewItemForm onSubmit={this.handleSubmit} />)
      :(<button className="add-card-btn btn" onClick={this.handleClick}>Add a card</button>)
    );
  }
}

const mapDispatchToProps = { addNewList };

export default connect(
  null,
  mapDispatchToProps,
  )(AddNewList);