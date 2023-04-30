import './App.css';
import React, { useState, useEffect } from 'react';
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

  const [prevCard, setPrevCard] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(0);

  // when you click a card
  const chooseCard = (e) => {
    // you clicked that card already
    if (prevCard.includes(e.target.classList[0])) {
      alert('game over!');
      if (highScore < currentStreak) {
        setHighScore(currentStreak)};
      setCurrentStreak(0);
      setPrevCard([]);
    } else {
      // selected card was ok
      console.log(e.target.classList[0]);
      setPrevCard([...prevCard, e.target.classList[0]]);
/*       if (prevCard.length === 7) {
        alert('you\'ve advanced a level!');
        setLevel(level + 1);
        setPrevCard([]);} */
      setCurrentStreak(currentStreak + 1);
      shuffleDeck();
  };
};

useEffect(() => {
  if (prevCard.length === 8) {
    alert('you\'ve advanced a level!');
    setLevel(level + 1);
    setPrevCard([]);
  }
}, [prevCard]);

// fisher-yates shuffle of the color array
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
      <p>for each level, select all eight colors in any order without clicking the same one twice.</p>
      < Deck deck = {colors} listener = {chooseCard} />
      <p>current streak: {currentStreak}</p>
      <p>high score: {highScore}</p>
    </div>
  );
  }

export default App;
