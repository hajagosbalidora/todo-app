import React from "react";
import Task from "./Task";


const TaskList = ({ tasks}) => {
    const taskComponents = tasks.map(task => {
        return (
            <Task
                title={task.title}
                decsription={task.decsription}
                date={task.date}
                key={task.id}
            />
        )
    })
return (
    <div className="TaskList">
        {taskComponents}
    </div>
)
}

export default TaskList;