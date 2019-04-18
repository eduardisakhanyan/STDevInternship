import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditItemForm from '../Forms/editItemForm';
import { updateCard } from '../../store/actions/cards';
import { updateUsersInCards } from '../../store/actions/cards';
import Select from 'react-select';

class EditList extends Component {

  handleSubmit = (value) => {
    this.props.updateCard(
      value,
      this.props.currentCard
    );
    this.props.closeModal();
  }

  handleChange = (value) => {
    this.props.updateUsersInCards(value,
      this.props.currentCard);
  }

  initialValues = () => {
    return {
      name: this.props.currentCard.name,
      description: this.props.currentCard.description || ''
    }
  }

  render() {
    return (
      <>
        {this.props.currentCard.users && 
        this.props.currentCard.users.map((userId,index) => {
          return <li key={index}>{this.props.users[userId - 1].value}</li>
        })
        }
        <Select options={this.props.users}
          onChange={this.handleChange}/>
        <EditItemForm onSubmit={this.handleSubmit}
          initialValues={this.initialValues()} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentCard: state.currentCard,
    users: state.users
  }
}

const mapDispatchToProps = {
  updateCard,
  updateUsersInCards
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditList);