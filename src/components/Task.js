import React from 'react';
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";

function Task(props) {
    return (
        <div className='Task'>
            <h3 className='Task_header'>{props.title}
                <div className='Buttons'>
                    <button className="Deletebutton" onClick={props.delete}><img src={binlogo} alt="Delete this task" /></button>
                    <button className="Editbutton"><img src={pencillogo} alt="Edit this card" /></button>
                </div>
            </h3>
        </div>
    );


}

export default Task;