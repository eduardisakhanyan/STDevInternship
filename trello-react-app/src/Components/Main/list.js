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
    return (
      <div className="list">
        <h3 className="list-title">{this.props.currentList.title}</h3>
        <ul className="list-items">
          {this.props.cards.filter(card => card.listId === this.props.currentList.id)
            .map((listCards, index) =>
              <Draggable key={listCards.id} draggableId={listCards.id} index={index + 1}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <li key={index}>
                      {listCards.label}
                    </li>
                  </div>
                )}
              </Draggable>
            )
          }
        </ul>
        {this.state.addingCard
          ? (<NewItemForm onSubmit={(value) => this.handleSubmit(value, this.props.currentList.id)}
            fieldName="label" />)
          : (<button class="add-card-btn btn" onClick={this.handleClick}>Add a card</button>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
  }
}

const mapDispatchToProps = { addNewCard };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);