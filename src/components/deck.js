import React, { useState } from 'react';



const Deck = (props) => {




    return (
        <div id='deckcontainer'>
            {props.deck && props.deck.map(color => <div className={color} style={{ backgroundColor: color }} onClick={props.listener} ></div>)}
        </div>
    )

};




export default Deck;