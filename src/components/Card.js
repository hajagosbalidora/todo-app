import React from "react";
import Task from './Task';
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: ""};
      }

    render() {
        return(
            <div className="Card">
                <h2 className="Card_header">{this.state.title}
                <div className="Buttons">
                    <button className="Addbutton" onClick={sayHello}><img src={addlogo} alt="Add new task"/></button>
                    <button className="Deletebutton"><img src={binlogo} alt="Delete this card"/></button>
                    <button className="Editbutton"><img src={pencillogo} alt="Edit this card"/></button>
                </div>
                </h2>
            </div>

        );
    }   
}
function sayHello(){
    console.log("Hello")
}


export default Card;
