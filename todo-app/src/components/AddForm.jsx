import React, { Component } from 'react';
import Task from './Task';
import tasks from './tasks';


class AddForm extends Component{
    constructor(props) {
        super(props);
        this.state = { title: '', description: '', date:''};
    }
    addTask(){
        var task = new Task({
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        });
        console.log(tasks);
        tasks.push(task);

    }


    render(){
        return (
            <div className="FormBackground">
            <div className="Formcontanier">
                <div className="Formcontanier_close">
                    <button className="Close_addform" onClick={this.props.open}>X</button>
                </div>
                <div className="Addform_header">
                    <h2>Adja meg az adatokat</h2>
                </div>
                <div className="Formcontanier_body">
                    <form className="Addform">
                        <label>Cím</label>
                        <input type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                        <label>Leírás</label>
                        <input type="text" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
                        <label>Határidő</label>
                        <input type="text" value={this.state.date} onChange={(e) => this.setState({date: e.target.value})}/>             
                    </form>
                </div>
                <div className="Submit">
                    <button onClick={this.addTask()}>Mentés</button>
                </div>
            </div>
            </div>
            
        )
    }
    
}

export default AddForm;