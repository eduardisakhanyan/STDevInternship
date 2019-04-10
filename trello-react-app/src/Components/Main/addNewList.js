import React, { Component } from 'react';
import NewItemForm from '../Forms/newItemForm';
import { connect } from 'react-redux';
import { addNewList } from '../../store/actions/lists';
import { addNewProductsList } from '../../store/actions/products';

class AddNewList extends Component {
  state = {
    addingList: false,
  }

  handleSubmit = async (value) => {
   
    await this.props.addNewList(value);
    const listId = this.props.lists[this.props.lists.length - 1].id + 1;
    //.then(()=> listId = this.props.lists[this.props.lists.length - 1].id);
    console.log(listId);
    await this.props.addNewProductsList(listId);
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

const mapStateToProps = state => {
  return {
    lists: state.lists,
  }
}

const mapDispatchToProps = { 
  addNewList,
  addNewProductsList 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(AddNewList);