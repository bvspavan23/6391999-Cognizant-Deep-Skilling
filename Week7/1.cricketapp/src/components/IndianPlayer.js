import React from 'react';

const IndianPlayers = () => {
  const T20Players = ['Virat', 'Rohit', 'Pant', 'Hardik'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Saha', 'Sundar'];

  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
