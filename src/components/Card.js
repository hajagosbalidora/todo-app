import React, { Component } from "react";
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";
import Task from "./Task";



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks:[] };
  }


  taskAddHandler = () => {
    var newArray = this.state.tasks.slice();
    newArray.push(new Task({}));
    this.setState({ tasks: newArray })
  }

  taskDeleteHandler = (taskIndex) => {
    const tasks = this.state.tasks;
    tasks.splice(taskIndex, 1);
    this.setState({ tasks: tasks });
  }


  render() {
    return (
      <div className="Card">
        <h2 className="Card_header">{this.props.title}
          <div className="Buttons">
            <button className="Addbutton" onClick={this.taskAddHandler}><img src={addlogo} alt="Add new task" /></button>
            <button className="Deletebutton" onClick={this.props.delete}><img src={binlogo} alt="Delete this card" /></button>
            <button className="Editbutton" ><img src={pencillogo} alt="Edit this card" /></button>
          </div>
        </h2>
        <div>
          {this.state.tasks.map(task => {
            return (
              <Task key={task.id} title={task.title} delete={(taskIndex) => this.taskDeleteHandler(taskIndex)} />
            )
          })}
        </div>
      </div>

    );
  }




}


export default Card;
