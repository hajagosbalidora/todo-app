import React, { Component } from "react";
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";
import Task from "./Task";



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks:[
        { id: 1, title: "Függőben" , description: '1', date: "2020-01-02"},
        { id: 2, title: "Függőben1", description: '1', date: "2020-01-02" },
        { id: 3, title: "Függőben2", description: '1', date: "2020-01-02"},
      ] 
    };
  }

  
  taskAddHandler = () => {
    var newArray = this.state.tasks.slice();
    newArray.push(new Task({}));
    this.setState({ tasks: newArray })
  }

  taskDeleteHandler(taskIndex){
    const newTaskArray = [...this.state.tasks];
    newTaskArray.splice(taskIndex, 1);
    this.setState({ tasks: newTaskArray });
  }

  taskUpHandler(taskIndex){
    const newTaskArray = [...this.state.tasks];
    if(taskIndex > 0){
      let t = newTaskArray[taskIndex];
      newTaskArray[taskIndex] = newTaskArray[taskIndex-1];
      newTaskArray[taskIndex-1] = t;
      this.setState({ tasks: newTaskArray });
    }
  }
  taskDownHandler(taskIndex){
    const newTaskArray = [...this.state.tasks];
    if (taskIndex !== -1 && taskIndex < newTaskArray.length - 1) {
      let t = newTaskArray[taskIndex];
      newTaskArray[taskIndex] = newTaskArray[taskIndex + 1];
      newTaskArray[taskIndex + 1] = t;
      this.setState({ tasks: newTaskArray });
    }
  }

  render() {
    return (
      <div className="Card">
        <div className="Card_header">
          <h2>{this.props.title}</h2>
          <div className="Buttons">
            <button className="Addbutton" onClick={this.taskAddHandler}><img src={addlogo} alt="Add new task" /></button>
            <button className="Deletebutton" onClick={this.props.delete}><img src={binlogo} alt="Delete this card" /></button>
            {/* <button className="Editbutton" ><img src={pencillogo} alt="Edit this card" /></button> */}
          </div>
        </div>
        <div>
          {this.state.tasks.map((task, index) => {
            return (
              <Task 
              key={task.id} 
              title={task.title}
              description = {task.description}
              date = {task.date}
              priority= {index}
              delete={() => this.taskDeleteHandler(index)}
              up= {() => this.taskUpHandler(index)}
              down= {() => this.taskDownHandler(index)} />
            )
          })}
        </div>
      </div>

    );
  }




}


export default Card;
