import React from 'react';

function Task(props){
    return(
        <div className='task'>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Task;