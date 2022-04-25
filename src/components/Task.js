import React from 'react';
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";

function Task(props) {
    const taskDeleteHandler = (taskIndex) => {
        const tasks = this.state.tasks;
        tasks.splice(taskIndex, 1);
        this.setState({ tasks: tasks });
      }

    return (
        <div className='Task'>
            <h3 className='Task_header'>{props.title}
                <div className='Buttons'>
                    <button className="Deletebutton" onClick={taskDeleteHandler}><img src={binlogo} alt="Delete this task" /></button>
                    <button className="Editbutton"><img src={pencillogo} alt="Edit this card" /></button>
                </div>
            </h3>
            <div className='Task_body'>
                {props.description}
                <div>
                    {props.date}
                </div>
            </div>
        </div>
    );

}

export default Task;