import React, { Component } from 'react';
import Lists from './lists';
import { connect } from 'react-redux';
import AddNewList from './addNewList';
import { DragDropContext } from 'react-beautiful-dnd';

class Main extends Component {

  onDragEnd = () => {
    return;
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
  }
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);