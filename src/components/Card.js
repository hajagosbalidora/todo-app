import React, { useState } from "react";
import addlogo from "../image/add_black.png";
import binlogo from "../image/bin_black.png";
import pencillogo from "../image/pencil_black.png";


function Card(props) {
    const id = 1;
    return(
        <div className="Card">
            <h2 className="Card_header">{props.title}
            <div className="Buttons">
                <button className="Addbutton"><img src={addlogo} alt="Add new task"/></button>
                <button className="Deletebutton" onClick={props.delete}><img src={binlogo} alt="Delete this card"/></button>
                <button className="Editbutton"><img src={pencillogo} alt="Edit this card"/></button>
            </div>
            </h2>
        </div>

    );

       
}


export default Card;
