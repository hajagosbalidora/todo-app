import React, { Component } from 'react';
import Card from "./components/Card";


class App extends Component {

    state = { cards:[
      { id: 1, title: "Függőben" },
      { id: 2, title: "Folyamatban" },
      { id: 3, title: "Kész" },
      { id: 4, title: "Elhalasztva" },
    ]
  }

  
  AddCardButtonHandler = () => {
    var newArray = this.state.cards.slice();
    newArray.push(new Card({}));
    this.setState({ cards: newArray })
  }

  cardDeleteHandler(cardindex){
    const newArray = [...this.state.cards];
    newArray.splice(cardindex, 1);
    this.setState({ cards: newArray });
  }



  render() {
    return (
      <div className="App">
        <div className='App_header'>
          <h1>Project</h1>
        </div>
        <div className='CardsBox'>
          {this.state.cards.map((card,index) => {
            return (
              <Card 
              key={card.id} 
              title={card.title} 
              delete={() => this.cardDeleteHandler(index)} 
              add={() => this.taskAddHandler} />
            )
          }
          )}
          <button className="AddCard_btn" onClick={() => this.AddCardButtonHandler()}>Add Card</button>
        </div>
      </div>

    );
  }


}

export default App;
