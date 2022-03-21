import React from 'react';

function Task(props){
    return(
        <div className='Task'>
            <h3 className='Task_header'>{props.name}
                <button className="Deletebutton">Delete</button>
                <button className="Szerkbutton">Szerk</button>
            </h3>
        </div>
    )
}

export default Task;