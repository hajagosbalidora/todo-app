import React, {Component} from 'react';
import binlogo from "../image/bin_black.png";
import up from "../image/up.png";
import down from "../image/down.png";
import pencillogo from "../image/pencil_black.png";

class Task extends Component {
   
    render(){
        return (
            <div className='Task'>
                <div className='Task_header'>
                    <h3>{this.props.title}</h3>
                    <div className='Buttons'>
                        <button className="Deletebutton" onClick={this.props.delete}><img src={binlogo} alt="Delete this task" /></button>
                        <button className="Editbutton" onClick={this.props.edit}><img src={pencillogo} alt="Edit this card" /></button>
                    </div>
                </div>
                <div className='Task_body'>
                    <p>{this.props.description}</p>
                </div>
                <div className='Task_date'>
                    <p>{this.props.date}</p>
                </div>
                <div className='UpandDownbutton'>
                    <button className="Up" onClick={this.props.up}><img src={up} alt="Priority up" /></button>
                    <button className="Down" onClick={this.props.down}><img src={down} alt="Priority down" /></button>
                </div>
            </div>
        );
    }

}

export default Task;