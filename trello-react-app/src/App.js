import React, { Component } from 'react';
import Header from './Components/Header';
import BoardInfo from './Components/BoardInfo';
import Main from './Components/Main';
import { connect } from 'react-redux';
//import { getLists } from './store/actions/lists';
//import { getCards } from './store/actions/cards';
//import { getCardsPositions } from './store/actions/products';
import { getData } from './store/actions/data';


class App extends Component {

  componentDidMount() {
    this.props.getData();
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
  //getLists,
  //getCards,
  //getCardsPositions,
  getData
};

export default connect(
  null,
  mapDispatchToProps
)(App);