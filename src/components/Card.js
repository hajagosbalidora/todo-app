import { render } from "@testing-library/react";
import React from "react";
import Task from './Task';

function Card(props){
    return(
        <div className="Card">
            <h2 className="head_card">{props.name}
            <button className="addbutton">Add
            </button>
            </h2>
            <div>
                <Task name = "Task one"/>
            </div>
        </div>

    );   
}
function AddCardButton(){
    return(
        <div className="AddCardButton">
            <button>Add Card</button>
        </div>
    )
}

export default Card;
