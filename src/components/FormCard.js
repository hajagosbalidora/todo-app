import React from 'react';
import cards from './cards';


function FormCard({title, cardIndex}) {
    const changeCard = (cardIndex) =>{
    };
  return(
    <dialog>
        <label>Cím:</label>
        <input value={title}></input>
        <button onClick={changeCard}>OK</button>
        <button>Mégsem</button>
    </dialog>
  );
}
export default FormCard;