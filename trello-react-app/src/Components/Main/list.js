import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItemForm from '../Forms/newItemForm';
import { updateData } from '../../store/actions/data';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import EditList from './editList';
import { getCurrentCard } from '../../store/actions/currentCard';

class List extends Component {
  state = {
    addingCard: false,
    openModalForm: false,
  }

  handleClick = () => {
    this.setState({
      addingCard: true,
    })
  }

  handleSubmit = async (value, id) => {
    value.listId = id;
    this.props.updateData(value,"CARD");
    this.setState({
      addingCard: false,
    })

  }

  handleClickModal = (event) => {
    console.log(event.target.name);
    this.props.getCurrentCard(event.target.getAttribute('edoiatribut'));
    this.setState({
      openModalForm: true,
    })
  }

  render() {
    const listPosition = this.props.positions.find((item) => {
      return item.listId === this.props.currentList.id;
    });
    return (
      (this.props.positions.length !== 0
        && this.props.cards.length !== 0
        && listPosition) && (
        <>
        <Draggable
          draggableId={`dragUl-${this.props.uniqueKey}`}
          index={this.props.uniqueKey - 1}
          key={this.props.currentList.id}
        >
          {provided => (
            <div
              className="list"
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <h3 className="list-title"
                {...provided.dragHandleProps}
              >{this.props.currentList.name}</h3>
              <Droppable 
                droppableId={this.props.currentList.id}
                type="cardDrop"
              >
                {provided => (
                  <ul className="list-items"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {listPosition.positionsArray.map((cardId, index) => {
                      const item = this.props.cards.find((card) => card.id === cardId);
                      if(item === undefined) {
                        return;
                      }
                      return <Draggable
                        draggableId={`dragLi-${this.props.currentList.id}-${index}`}
                        index={index}
                        key={index}
                      >
                        {provided => (             
                           <li
                            edoiatribut={cardId} 
                            key={index}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={this.handleClickModal}
                          >
                            {item.name}
                          </li>
                          )
                        }
                      </Draggable>
                    })
                    }
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>

              {this.state.addingCard
                ? (<NewItemForm onSubmit={(value) => this.handleSubmit(value, this.props.currentList.id)}
                />)
                : (<button class="add-card-btn btn" onClick={this.handleClick}>Add a card</button>)
              }
            </div>
          )}
        </Draggable>
        {(this.state.openModalForm  
        && this.props.currentCard.length !== 0)
         && <EditList />} 
        </>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    positions: state.cardsPositions,
    currentCard: state.currentCard,
  }
}

const mapDispatchToProps = {
  updateData,
  getCurrentCard
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