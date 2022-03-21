import React from "react";

function AddCardButton(){
    return(
        <div className="AddCardButton">
            <button className="AddCard_btn" onClick={AddCardButtonListener}>Add Card</button>
        </div>
    )
}

function AddCardButtonListener(){
    const card =React.createElement('Card', {},"Felfüggesztve")
}

export default AddCardButton;