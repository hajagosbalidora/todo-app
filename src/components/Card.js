import React, { Component } from "react";
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";
import Task from "./Task";
import tasks from './tasks';



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditOpen:false,
      tasks: tasks,
     };
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
            <button className="Addbutton" onClick={this.props.taskadd}><img src={addlogo} alt="Add new task" /></button>
            <button className="Deletebutton" onClick={this.props.delete}><img src={binlogo} alt="Delete this card" /></button>
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
              edit={this.props.edit}
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

