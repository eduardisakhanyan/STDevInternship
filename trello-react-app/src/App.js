import React, { Component } from 'react';
import Header from './Components/Header';
import BoardInfo from './Components/BoardInfo';
import Main from './Components/Main';
import { connect } from 'react-redux';
import { getLists } from './store/actions/lists';
import { getCards } from './store/actions/cards';
import { getCardsPositions } from './store/actions/cardsPositions';



class App extends Component {

  


  componentDidMount() {
    this.props.getLists();
    this.props.getCardsPositions();
    this.props.getCards();
  }

  render() {
    return (     
        <div>
          <Header />
          <BoardInfo />
          <Main />
        </div>
    );
  }
}

const mapDispatchToProps = {
  getLists,
  getCards,
  getCardsPositions,
};

export default connect(
  null,
  mapDispatchToProps
)(App);