import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditItemForm from '../Forms/editItemForm';
import { updateCard } from '../../store/actions/cards';
import { deleteCurrentUser } from '../../store/actions/currentCard';

class EditList extends Component {
  state = {
  }

  handleSubmit = (value) => {
    this.props.updateCard(
      value,
      this.props.currentCard
      );
    this.props.deleteCurrentUser();
  }

  initialValues = () => {
    console.log(this.props.currentCard);
    return{   
      name: this.props.currentCard.name,
      description: this.props.currentCard.description || ''
    }
  }

  render(){
    return (
    <div className='modal'>
      <div className='modal-content'>
        <EditItemForm onSubmit={this.handleSubmit}
        initialValues={this.initialValues()} />
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentCard: state.currentCard
  }
}

const mapDispatchToProps = {
  updateCard,
  deleteCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(EditList);