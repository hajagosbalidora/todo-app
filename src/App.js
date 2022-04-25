import React, { Component } from 'react';
import CardList from './components/CardList.jsx';
import FormCard from './components/FormCard.js';
import {cards} from './components/cards';


class App extends Component {
  cardDeleteHandler = (cardIndex) => {
    const cards = this.state.cards;
    cards.splice(cardIndex, 1);
    this.setState({ cards: cards });
  }
  cardEditHandler = (cardIndex) => {
    return(
      <div>
        <FormCard/>
      </div>
    );
    
  }


  AddCardButtonHandler = () => {
    var newArray = this.state.cards.slice();
    newArray.push({ id: 4, title: "Kész" });
    this.setState({ cards: newArray })
  }

  render() {
    return (
      <div className="App">
        <div className='App_header'>
          <h1>Project</h1>
          <button className='AppEditbutton'>Edit Project</button>
        </div>
        <div className='CardsBox'>
          <CardList cards ={cards}/>
          <button className="AddCard_btn" onClick={() => this.AddCardButtonHandler()}>Add Card</button>
        </div>
      </div>

    );
  }


}

export default App;
