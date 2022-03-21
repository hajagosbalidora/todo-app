import React from "react";
import Task from './Task';
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";

function Card(props){
    return(
        <div className="Card">
            <h2 className="Card_header">{props.name}
            <div className="Buttons">
                <button className="Addbutton" onClick={sayHello}><img src={addlogo} alt="Add new task"/></button>
                <button className="Deletebutton"><img src={binlogo} alt="Delete this card"/></button>
                <button className="Editbutton"><img src={pencillogo} alt="Edit this card"/></button>
            </div>
            </h2>
            <div>
                <Task name = "Task one"/>
                <Task name = "Task two"/>
                <Task name = "Task three"/>
            </div>
        </div>

    );   
}
function sayHello(){
    console.log("Hello")
}


export default Card;
