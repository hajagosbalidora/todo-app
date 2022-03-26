import React from 'react';
import Card from './components/Card.js';
import Task from './components/Task.js';
import AddCardButton from './components/AddCardButton.js';

function App() {
  return (
    <div className="App">
      <div className='App_header'>
      <h1>Project</h1>
      <button className='AppEditbutton'>Edit Project</button>
      </div>
      <div className='CardsBox'>      
        <Card title ="Terv">
          <Task title = "Task one"/>
          <Task title = "Task two"/>
        </Card>
        <Card title ="Folyamatban"/>
        <Card title ="Kész"/>
        <AddCardButton/>
      </div>
    </div>
    
  );
}

export default App;
