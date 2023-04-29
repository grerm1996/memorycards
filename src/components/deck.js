import React, { useState, useMemo } from 'react';



const Deck = (props) => {




    return (
        <div id='deckcontainer'>
            {props.deck && props.deck.map(color => <div className={color} style={{ backgroundColor: color }}></div>)}
        </div>
    )

};




export default Deck;