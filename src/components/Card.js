import React, { Component } from "react";
import Task from "./Task";
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";


class Card extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.title = "";

  }
  state = {
    tasks: [
      { id: 1, cardid: 1, title: " Task one" },
      { id: 2, cardid: 1, title: " Task two" },
      { id: 3, cardid: 2, title: " Task three" }
    ]
  }

  taskDeleteHandler = (taskIndex) => {
    const tasks = this.state.tasks;
    tasks.splice(taskIndex, 1);
    this.setState({ tasks: tasks });
  }

  taskAddHandler = () => {
    var newArray = this.state.tasks.slice();
    newArray.push({ id: 4, cardid: 2, title: "Kész" });
    this.setState({ tasks: newArray })
  }

  render() {
    return (
      <div className="Card">
        <h2 className="Card_header">{this.props.title}
          <div className="Buttons">
            <button className="Addbutton" onClick={this.taskAddHandler}><img src={addlogo} alt="Add new task" /></button>
            <button className="Deletebutton" onClick={this.props.delete}><img src={binlogo} alt="Delete this card" /></button>
            <button className="Editbutton" onClick={this.cardEditHandler(cardIndex)}><img src={pencillogo} alt="Edit this card" /></button>
          </div>
        </h2>
        <div>
          {
            this.state.tasks.map((task, index) => {
              return (
                <Task
                  title={task.title}
                  delete={() => this.taskDeleteHandler(index)}
                  key={task.id}
                />
              )
            })
          }
        </div>
      </div>

    );
  }



}


export default Card;
