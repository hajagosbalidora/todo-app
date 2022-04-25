import React, { Component } from 'react';
import Card from './components/Card.js';
import Task from './components/Task.js';


class App extends Component {
  state = {
    cards: [
      { id: 1, title: "terv" },
      { id: 2, title: "folyamatban" }
    ]

  }

  cardDeleteHandler = (cardIndex) => {
    const cards = this.state.cards;
    cards.splice(cardIndex, 1);
    this.setState({ cards: cards });
  }
  cardEditHandler = (cardIndex) => {
    const cards = this.state.cards;

    this.setState({ cards: cards });
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
          {
            this.state.cards.map((card, index) => {
              return (
                <Card
                  title={card.title}
                  delete={() => this.cardDeleteHandler(index)}
                  key={card.id}
                />
              )
            })
          }
          <button className="AddCard_btn" onClick={() => this.AddCardButtonHandler()}>Add Card</button>
        </div>
      </div>

    );
  }


}

export default App;
