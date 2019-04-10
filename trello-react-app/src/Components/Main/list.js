import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItemForm from '../Forms/newItemForm';
import { addNewCard } from '../../store/actions/cards';
import { Draggable } from 'react-beautiful-dnd';
import { addCardInPositions } from '../../store/actions/products';

class List extends Component {
  state = {
    addingCard: false,
  }

  handleClick = () => {
    this.setState({
      addingCard: true,
    })
  }

  handleSubmit = async (value, id) => {
    value.listId = id;
    const newCardId = this.props.cards[this.props.cards.length - 1].id + 1;
    await this.props.addCardInPositions(id, newCardId);
    this.setState({
      addingCard: false,
    })
    await this.props.addNewCard(value);
  }

  render() {
    const listPosition = this.props.positions.find((item) => {
      return item.listId === this.props.currentList.id;
    });
    return (
      (this.props.positions.length !== 0
        && this.props.cards.length !== 0
        && listPosition) && (
        <Draggable draggableId={`dragUl-${this.props.currentList.id}`}
          index={this.props.currentList.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              
            >
              <div className="list">
                <h3 className="list-title">{this.props.currentList.name}</h3>
                <ul className="list-items">
                  {listPosition.positionsArray.map((cardId, index) => (
                    <Draggable draggableId={`dragLi-${this.props.currentList.id}-${index}`} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <li key={index}>
                            {this.props.cards.find((card) => {
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
              </div>
            </div>
          )}
        </Draggable>
      ))
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
  addCardInPositions
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