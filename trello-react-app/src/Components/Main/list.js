import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItemForm from '../Forms/newItemForm';
import { addNewCard } from '../../store/actions/cards';
import { Draggable } from 'react-beautiful-dnd';

class List extends Component {
  state = {
    addingCard: false,
  }

  handleClick = () => {
    this.setState({
      addingCard: true,
    })
  }

  handleSubmit = (value, id) => {
    value.listId = id;
    this.props.addNewCard(value);
    this.setState({
      addingCard: false,
    })
  }

  render() {
    const listPosition = this.props.positions.find((item) => {
      return item.listId === this.props.currentList.id;
    });
    const listCards = this.props.cards.filter((card) => {
      return card.listId === this.props.currentList.id;
    });
    return (
      (this.props.positions.length !== 0 && this.props.cards.length !== 0) && (
        <div className="list">
          <h3 className="list-title">{this.props.currentList.name}</h3>
          <ul className="list-items">
            {listPosition.positionsArray.map((cardId, index) => (
              <Draggable draggableId={`drug-${this.props.currentList.id}-${index}`} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <li key={index}>
                      {listCards.find((card) => {
                        return card.id === cardId;
                      }).name}
                    </li>
                  </div>
                )}
              </Draggable>
            ))
            }
          </ul>
          {this.state.addingCard
            ? (<NewItemForm onSubmit={(value) => this.handleSubmit(value, this.props.currentList.id)}
            />)
            : (<button class="add-card-btn btn" onClick={this.handleClick}>Add a card</button>)
          }
        </div>)
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    positions: state.cardsPositions,
  }
}

const mapDispatchToProps = {
  addNewCard,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

//<Draggable draggableId={index + 1} index={index + 1}>
              //   {(provided, snapshot) => (
              //     <div
              //       ref={provided.innerRef}
              //       {...provided.draggableProps}
              //       {...provided.dragHandleProps}
              //     >

              //     </div>
              //   )}
              // </Draggable>