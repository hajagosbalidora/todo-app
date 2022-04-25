import React from "react";
import TaskList from "./TaskList";
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";
import {tasks} from './tasks';


function Card(props) {
  const taskAddHandler = () => {
    var newArray = this.state.tasks.slice();
    newArray.push({ id: 4, cardid: 2, title: "Kész", description: "", date: new Date().toLocaleTimeString() });
    this.setState({ tasks: newArray })
  }

  

  return (
    <div className="Card">
      <h2 className="Card_header">{props.title}
        <div className="Buttons">
          <button className="Addbutton" onClick={taskAddHandler}><img src={addlogo} alt="Add new task" /></button>
          <button className="Deletebutton" onClick={this.props.delete}><img src={binlogo} alt="Delete this card" /></button>
          <button className="Editbutton" ><img src={pencillogo} alt="Edit this card" /></button>
        </div>
      </h2>
      <div>
        <TaskList tasks = {tasks}/>
      </div>
    </div>

  );



}


export default Card;
