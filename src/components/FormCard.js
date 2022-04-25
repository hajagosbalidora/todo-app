import React from 'react';


function FormCard({title}) {
    changeCard = () =>{

    }
  return(
    <dialog>
        <label>Cím:</label>
        <input value={title}></input>
        <button onClick={this.changeCard}>OK</button>
        <button>Mégsem</button>
    </dialog>
  );
}
export default FormCard;