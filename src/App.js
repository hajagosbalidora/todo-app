import React from 'react';
import Card from './components/Card.js';
import AddCardButton from './components/AddCardButton.js';

function App() {
  return (
    <div className="App">
      <div className='App_header'>
      <h1>Project</h1>
      <button className='Szerkbutton'>Szerk</button>
      </div>
      <div className='CardsBox'>      
        <Card name ="Terv"/>
        <Card name ="Folyamatban"/>
        <Card name ="Kész"/>
        <AddCardButton/>
      </div>
    </div>
    
  );
}

export default App;
