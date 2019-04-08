import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';
import { Droppable } from 'react-beautiful-dnd';

class Lists extends Component {
  render() {
    return (
      this.props.lists.map((list, index) =>
        <Droppable droppableId={index + 1}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <List currentList={list} key={index} />
            </div>
          )}
        </Droppable>
      )
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
)(Lists);


