import { render } from '@testing-library/react';
import React from 'react';
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: "Task one"};
      }

    render() {
        return(
            <div className='Task'>
                <h3 className='Task_header'>{this.state.title}
                    <div className='Buttons'>
                        <button className="Deletebutton"><img src={binlogo} alt="Delete this task"/></button>
                        <button className="Editbutton"><img src={pencillogo} alt="Edit this card"/></button>
                    </div>
                </h3>
            </div>
        );
    }
}

export default Task;