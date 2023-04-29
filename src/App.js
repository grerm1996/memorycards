import './App.css';
import React, { useState, useMemo } from 'react';
import Deck from './components/deck';

function App() {

  const [colors, setColors] = useState(
    ['red',
    'blue',
    'yellow',
    'green',
    'orange',
    'pink',
    'black',
    'purple',
  ]);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  let shuffleDeck = ()=>{
    let deck = shuffleArray(colors);
    setColors(deck);
  };
  
 
  return (
    <div id='overall'>
      <button onClick = {shuffleDeck}>Shuffle!</button>
      < Deck deck = {colors}/>
    </div>
  );

}

export default App;
