import React, { Component } from 'react';
import Lists from './lists';
import { connect } from 'react-redux';
import AddNewList from './addNewList';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateArray } from '../../store/actions/cardsPositions';

class Main extends Component {

   onDragEnd = (response) => {
    if(!response.destination){
      return;
    }
    this.props.updateArray(
      this.props.positions[response.destination.droppableId - 1].positionsArray,
      response.source.index,
      response.destination.index,
      response.source.droppableId,
      response.destination.droppableId
    )
   }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <section className="lists-container">
          <Lists />
          <AddNewList />
        </section>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists,
    positions: state.cardsPositions,
  }
}

const mapDispatchToProps = {
  updateArray,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);