import React, { Component } from 'react';

class EditForm extends Component{
    
    render(){
        return (
            <div className="FormBackground">
            <div className="Formcontanier">
                <div className="Formcontanier_close">
                    <button className="Close_addform" onClick={this.props.open}>X</button>
                </div>
                <div className="Addform_header">
                    <h2>Adja meg az adatokat</h2>
                </div>
                <div className="Formcontanier_body">
                    <form className="Addform">
                        <label>Cím</label>
                        <input type="text" placeholder='cím'/>
                        <label>Leírás</label>
                        <input type="text" placeholder='leírás'/>
                        <label>Határidő</label>
                        <input type="text" placeholder='határidő'/>             
                    </form>
                </div>
                <div className="Submit">
                    <button>Mentés</button>
                </div>
            </div>
            </div>
            
        )
    }
    
}

export default EditForm;