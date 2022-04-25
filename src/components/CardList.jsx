import React from "react";
import Card from "./Card";

const CardList = ({cards}) => {
    const cardComponents = cards.map((card) => {
        return(
            <Card 
                title={card.title}
                key={card.id}
            /> 
        )
    });
    return(
        <div className="CardList">
           {cardComponents} 
        </div>
    )
}

export default CardList;