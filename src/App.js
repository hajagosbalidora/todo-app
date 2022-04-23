import React, {Component} from 'react';
import Card from './components/Card.js';
import Task from './components/Task.js';


class App extends Component {
  state = {
    cards: [
      {id: 1, title: "Terv"},
      {id: 2, title: "Folyamatban"},
      {id: 3, title: "Kész"}
    ],
    tasks: [
      {cardid: 1, title:" Task one"},
      {cardid: 1, title:" Task two"},
      {cardid: 2, title:" Task three"}
    ]
  }

  cardDeleteHandler = (cardIndex) =>{
    const cards = this.state.cards;
    cards.splice(cardIndex, 1);
    this.setState({cards: cards});
  }
  cardEditHandler = (cardIndex) =>{
    const cards = this.state.cards;

    this.setState({cards: cards});
  }

  AddCardButtonHandler = () =>{
    const card = new Card();
    const cards = this.state.cards;
    cards.push(card);
    this.setState({cards: cards});
}

  render (){
    return (
      <div className="App">
        <div className='App_header'>
        <h1>Project</h1>
        <button className='AppEditbutton'>Edit Project</button>
        </div>
        <div className='CardsBox'>
          {
            this.state.cards.map((card, index) => {
              return(
                <Card 
                title={card.title} 
                delete={() => this.cardDeleteHandler(index)}
                key={card.id}
                />
              )
            })
          }
          <button className="AddCard_btn" onClick={() => AddCardButtonHnadler}>Add Card</button>
        </div>
      </div>
      
    );
  }
  

}

export default App;
