import React, { Component } from 'react';
import Lists from './lists';
import { connect } from 'react-redux';
import AddNewList from './addNewList';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateArray } from '../../store/actions/products';

class Main extends Component {

   onDragEnd = (response) => {
    // combine: null
    // destination: {droppableId: 1, index: 1}
    // draggableId: "drag-1-0"
    // mode: "FLUID"
    // reason: "DROP"
    // source: {index: 0, droppableId: 1}
    // type: "DEFAULT"
    if(!response.destination){
      return;
    }
    this.props.updateArray(
      this.props.positions[response.source.droppableId - 1].positionsArray,
      this.props.positions[response.destination.droppableId -1].positionsArray,
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