import React, { Component } from 'react';
import Card from "./components/Card";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Task from './components/Task';

class App extends Component {

    state = { 
      isOpen: false,
      isEditOpen: false,
      cards:[
      { id: 1, title: "Függőben"},
      { id: 2, title: "Folyamatban"},
      { id: 3, title: "Kész"},
      { id: 4, title: "Elhalasztva"},
    ]}

  
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
  
  
  handleChange(event){
    this.props.title = event.target.value;
    this.setState({isEditOpen: false});
  }
  

  render() {
    return (
      <div className="App">
        {this.state.isOpen && <AddForm open={() => this.setState({isOpen: false})} />}
        {this.state.isEditOpen && <EditForm open={() => this.setState({isEditOpen: false})}/>}
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
              taskadd={() => this.setState({isOpen: true})}
              edit={() => this.setState({isEditOpen: true})}
              />
            )
          })}
          <button className="AddCard_btn" onClick={() => this.AddCardButtonHandler()}>Add Card</button>
        </div>
      </div>

    );
  }


}

export default App;
